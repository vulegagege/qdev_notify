class CyberpunkNotification {
    constructor() {
        this.container = document.getElementById('notification-container');
        this.notifications = [];
        this.maxNotifications = 5;
    }

    show(options) {
        const { title, message, type, duration } = options;
        
        this.playNotificationSound();
        
        if (this.notifications.length >= this.maxNotifications) {
            this.removeOldest();
        }

        const notification = this.createNotification(title, message, type, duration);
        this.container.appendChild(notification);
        this.notifications.push(notification);

        setTimeout(() => {
            this.remove(notification);
        }, duration);

        return notification;
    }

    playNotificationSound() {
        try {
            const audio = new Audio('sound.wav');
            audio.volume = 0.5;
            audio.play().catch(e => console.log('Sound play failed:', e));
        } catch (e) {
            console.log('Sound loading failed:', e);
        }
    }

    createNotification(title, message, type, duration) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        let icon = '';
        switch(type) {
            case 'success':
                icon = '<i class="fas fa-check-circle notification-icon"></i>';
                break;
            case 'error':
                icon = '<i class="fas fa-exclamation-triangle notification-icon"></i>';
                break;
            case 'warning':
                icon = '<i class="fas fa-exclamation-circle notification-icon"></i>';
                break;
            case 'info':
            default:
                icon = '<i class="fas fa-info-circle notification-icon"></i>';
                break;
        }
        
        notification.innerHTML = `
            <div class="notification-header">
                ${icon}
                <span class="notification-type ${type}">${type}</span>
                <span class="notification-title">${title}</span>
            </div>
            <div class="notification-message">${message}</div>
            <div class="progress-container">
                <div class="progress-bar ${type}"></div>
            </div>
        `;

        const progressBar = notification.querySelector('.progress-bar');
        progressBar.style.animationDuration = `${duration}ms`;

        return notification;
    }

    remove(notification) {
        if (!notification || !notification.parentNode) return;

        notification.classList.add('hiding');
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            const index = this.notifications.indexOf(notification);
            if (index > -1) {
                this.notifications.splice(index, 1);
            }
        }, 400);
    }

    removeOldest() {
        if (this.notifications.length > 0) {
            this.remove(this.notifications[0]);
        }
    }

    success(title, message, duration = 5000) {
        return this.show({ title, message, type: 'success', duration });
    }

    error(title, message, duration = 5000) {
        return this.show({ title, message, type: 'error', duration });
    }

    info(title, message, duration = 5000) {
        return this.show({ title, message, type: 'info', duration });
    }

    warning(title, message, duration = 5000) {
        return this.show({ title, message, type: 'warning', duration });
    }
}

const notifications = new CyberpunkNotification();

function showNotification(title, message, type = 'info', duration = 5000) {
    return notifications.show({ title, message, type, duration });
}

window.addEventListener('message', function(event) {
    const info = event.data.info 
    if (event.data.type === 'alert') {
        notifications.show({ 
            title: info.title || 'Notification', 
            message: info.msg || '', 
            type: info.type || 'info', 
            duration: 5000
        });
    }
});