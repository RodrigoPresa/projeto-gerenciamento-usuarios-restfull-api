const { check } = require("express-validator");
let NeDb = require('nedb');
let db = new NeDb({
    filename: 'users.db',
    autoload: true
});

module.exports = app =>{
    let route = app.route('/users');

    route.get((req, res)=>{ //rota para buscar todos os registros do db   
        db.find({}).sort({name:1}).exec((err, users)=>{
            if(err){
                app.utils.error.send(err, req, res);
            }else {
                res.status(200);
                res.json({
                    users
                });
            }
        });
    });

    route.post(
        [
          check("_name", "O nome é obrigatório.").notEmpty(),
          check("_email", "Email inválido.").notEmpty().isEmail(),
        ],
        (req, res) => {
          
            if(!app.utils.validator.user(app, req, res)) return false;
     
            db.insert(req.body, (err, user) => {
                if (err) {
                app.utils.error.send(err, req, res);
                } else {
                res.status(200).json(user);
                }
            });
        }
      );
    
    let routeId = app.route('/users/:id');

    routeId.get((req, res)=>{ //rota que retorna somente um registro do db, baseado no id passado por parâmetro
        db.findOne({_id: req.params.id}).exec((err, user)=>{
            if(err){
                app.utils.error.send(err, req, res);
            }else {
                res.status(200);
                res.json({
                    user
                });
            }
        });
    });

    routeId.put(
        [
            check("_name", "O nome é obrigatório.").notEmpty(),
            check("_email", "Email inválido.").notEmpty().isEmail(),
        ],
        (req, res)=>{ //rota que edita um registro do db, baseado no id passado por parâmetro

        if(!app.utils.validator.user(app, req, res)) return false;

        db.update({_id: req.params.id}, req.body, err =>{
            if(err){
                app.utils.error.send(err, req, res);
            }else {
                res.status(200);
                res.json(Object.assign(req.params, req.body));
            }
        });
    });

    routeId.delete((req, res)=>{ //rota que deleta um registro do db, baseado no id passado por parâmetro
        db.remove({_id: req.params.id}, {}, err =>{
            if(err){
                app.utils.error.send(err, req, res);
            }else {
                res.status(200);
                res.json(req.params);
            }
        });
    });
};