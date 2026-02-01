
sendAlert = function(data)
    if not data then return end
    SendNUIMessage({
        type = 'alert',
        info = data
    })
end

exports('sendAlert', sendAlert)

RegisterNetEvent('qdev_notify:client:sendAlert')
AddEventHandler('qdev_notify:client:sendAlert', function(data)
    sendAlert(data)
end)

RegisterCommand('qdev1', function()
    exports['qdev_notify']:sendAlert({
        type = 'success',
        title = 'QDEV Roleplay',
        msg = 'This is a test message from Vule - lorem ipsum style',
        time = 10
    })

    exports['qdev_notify']:sendAlert({
        type = 'error',
        title = 'QDEV Roleplay',
        msg = 'This is a test message from Vule - lorem ipsum style',
        time = 10
    })

    exports['qdev_notify']:sendAlert({
        type = 'info',
        title = 'QDEV Roleplay',
        msg = 'This is a test message from Vule - lorem ipsum style',
        time = 10
    })

    exports['qdev_notify']:sendAlert({
        type = 'police',
        title = 'QDEV Roleplay',
        msg = 'This is a test message from Vule - lorem ipsum style',
        time = 10
    })

    exports['qdev_notify']:sendAlert({
        type = 'warning',
        title = 'QDEV Roleplay',
        msg = 'This is a test message from Vule - lorem ipsum style',
        time = 10
    })
end)