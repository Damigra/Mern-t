const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    from: { type: String, required: true }, //откуда идет данная ссылка
    to: { type: String, required: true, unique: true }, //куда будет вести данная ссылка
    code: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },//когда данная ссылка была создана
    clicks: { type: Number, default: 0 },//количество кликов
    owner: { type: Types.ObjectId, ref: 'User' }//необходимо связать эти ссылки с пользователем
})

module.exports = model('Link', schema)

//Данные роуты будут отвечать за регенирациюю ссылок которые мы будет сокразать в приложении