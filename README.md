# 📢 Qdev Notifications - Usage Example

![Preview](https://r2.fivemanage.com/hz6NSYQSDWkxuEguj5Ppl/final_thumbnail.png)

This documentation provides examples on how to use the **qdev_notify** system to display various types of notifications on both client-side and server-side.

---

## ✅ Client-Side Usage

Use this when you want to trigger a notification directly from the client.

```lua
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
```

---

## 🛠️ Server-Side Usage

Use this when you want to trigger a notification from the server to a specific player.

```lua
RegisterCommand('qdev2', function(source, args)
    exports['qdev_notify']:sendAlert(source, {
        type = 'success',
        title = 'QDEV Roleplay',
        msg = 'This is a test message from Vule - lorem ipsum style',
        time = 10
    })

    exports['qdev_notify']:sendAlert(source, {
        type = 'error',
        title = 'QDEV Roleplay',
        msg = 'This is a test message from Vule - lorem ipsum style',
        time = 10
    })

    exports['qdev_notify']:sendAlert(source, {
        type = 'info',
        title = 'QDEV Roleplay',
        msg = 'This is a test message from Vule - lorem ipsum style',
        time = 10
    })

    exports['qdev_notify']:sendAlert(source, {
        type = 'warning',
        title = 'QDEV Roleplay',
        msg = 'This is a test message from Vule - lorem ipsum style',
        time = 10
    })
end)
```

---

### 📝 Notification Types

- `success` – Green success alert
- `error` – Red error alert
- `info` – Blue informational alert
- `police` – Custom police-style alert
- `warning` – Yellow warning alert

---

> ℹ️ Customize `title`, `msg`, and `time` as needed for your own use cases.
