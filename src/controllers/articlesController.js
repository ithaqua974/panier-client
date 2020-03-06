const articlesController = {};
const Article = require('../models/article.js')

articlesController.list = (req, res) => {
    Article.findAll().then(articles => {
        res.render('articles/index',{
            articles: articles,
            title: "Articles"
        })
    })
}

articlesController.jsonList = (req, res) => {
    Article.findAll().then(articles => {
        try {
            res.json({
                statut: "OK",
                data: articles,
                message: ""
            })
        } catch (error) {
            res.json({
                statut: "KO",
                message: error
            })
        }
    })
}
articlesController.add = (req, res) => {
    res.render('articles/_addForm', {
        title: "Ajouter un article"
    })
}
articlesController.create = (req, res) => {
    Article.create({
        nom: req.body.nom_article,
        detail: req.body.detail_article,
        prix: req.body.prix_article,
        image: req.body.image_article,
        categories_id: Number(req.body.categorie_article)
    }).then(res.redirect('/articles'))
}
articlesController.edit = (req, res) => {
    Article.findOne({
        where: {id: req.params.id}

    }).then(article => {
        res.render('articles/_editForm',{
            title: "Modifier un article",
            article: article
        })
    })
}
articlesController.update = (req, res) => {
    Article.findOne({
        where: {id: req.params.id}
    }).then(article => {
        Article.update({
            nom: req.body.nom_article,
            detail: req.body.detail_article,
            prix: req.body.prix_article,
            image: req.body.image_article,
            categories_id: req.body.categorie_article
        }, {
            where:{
                id:req.params.id
            }
        }).then(res.redirect('/articles'))
    })
}
articlesController.delete = (req, res) => {
    Article.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/articles')
    })
}

module.exports = articlesController;