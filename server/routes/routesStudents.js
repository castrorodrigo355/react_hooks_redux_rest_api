const express = require("express");
const Student = require("../models/studentSchema");
const router = express.Router();
// var faker = require('faker');

// CREAR UN ESTUDIANTE
router.post("/", (req, res) => {
    var name = req.body.name;
    var age = req.body.age;
    var student = new Student({name, age})
    // var student = new Student({name: n, lastname: l, image: faker.image.imageUrl()})
    student.save()
        .then(result => res.json(result))
        .catch(err => console.log(err));
});

// OBTENER LA LISTA DE ESTUDIANTES
router.get("/", (req, res) => {
    Student.find({})
        .then(students => res.status(200).json(students))
        .catch(err => res.status(500).json(err))
});

// OBTENER UN ESTUDIANTE MEDIANTE UN "id"
router.get("/:id", (req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            if (student){
                res.status(200).json(student);
            } else {
                res.status(404).json({ message: 'not found!'});
            }
        });
});

// // ELIMINAR UNA ESTUDIANTE MEDIANTE UN "id"
router.delete("/:id", (req, res) => {
    Student.findByIdAndDelete(req.params.id, function(err, student){
        if (err){
            res.status(404).json({ message: 'not found!'});
        } else {
            res.json(student)
        }
    })
});

// // (Project.deleteMany({studentId: student._id})
//         // .then(response => response.status(204).json({ messsage: 'deleted!'}))
//         // .catch(err => res.status(503).json(err)))

// router.delete("/:id", (req, res) => {
//     Student.findByIdAndDelete(req.params.id)
//         .then( result => 
//                 Student.find({})
//                 .then(students => res.status(200).json(students))
//                 .catch(err => res.status(500).json(err))    
//         )
//         .catch( err => res.status(503).json(err));
// });

// ACTUALIZAR UN ESTUDIANTE MEDIANTE UN "id"
router.put("/:id", (req, res) => {
    Student.findByIdAndUpdate({_id: req.params.id}, {$set: {"name": req.body.name, 
                                                  "age": req.body.age}}, 
                                                  {new: true}, (err, doc) => {
        err ? res.json(err) : 
        Student.find({})
                .then(students => res.status(200).json(students))
                .catch(err => res.status(500).json(err));
    });
});

module.exports = router;