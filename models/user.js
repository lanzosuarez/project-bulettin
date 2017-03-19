let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
   username:{
        type:String,
        validate:{
            validator:(v)=>{
                var r = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                return r.test(v);
            },
            message: 'Email is invalid!'
        },
        required:[true, "Username is required"],
    },

    posts: []
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema);