$(document).ready(function(){
    var EL = {};

    EL.AppRouter = Backbone.Router.extend({
        routes: {
            "Contents":                       "content",
            ":section/:page":                 "flipTo",
            "*path":                          "content"
        },

        content: function(){
            $("section.current").removeClass("current");
            $("section.Contents").addClass("current");
        },

        flipTo: function(section, page) {
            $("section.current").removeClass("current");

            if ($("section#"+ page +"."+ section).length === 1){
                $("section#"+ page +"."+ section).addClass("current");
            } else {
                $("section#notFound").addClass("current");
            }
        }
    });

    var appRouter = new EL.AppRouter();

    Backbone.history.start();
});