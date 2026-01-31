
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
