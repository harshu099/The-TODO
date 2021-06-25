$(document).ready(function () {
    $("#project").tabs();
    $("ul").sortable({ axis: "x", containment: "#project" });
    $("ol").sortable({ axis: "y", containment: "#project" });
    $("#project").on("click","input[type=checkbox]",function(){
        $(this).closest("li").slideUp(function(){
            $(this).remove();
        })
    });
    $("#btnAddProject").button().click(function(){
        $("#projectDialogue").dialog({
            width:400,
            resizable:false,
            modal:true,
            buttons:{
                "Add new project":function(){
                    var projectName=$("#newProject").val();
                    var replaceName=projectName.split(" ").join("_")
                    $("<li><a href='#"+replaceName+"'>"+projectName+"</a><span class='ui-icon ui-icon-close'></li>").appendTo("#main");
                    $("<ol id='"+replaceName+"'></ol>").appendTo("#project").sortable();
                    $("#project").tabs("refresh");
                    $("#newProject").val("");
                    $(this).dialog("close");
                },
                "Cancel":function(){
                    $("#newProject").val("");
                    $(this).dialog("close");
                }
            }
        });
    });
    $("#btnAddTask").button().click(function(){
        $("#taskDialogue").dialog({
            width:400,
            resizable:false,
            modal:true,
            buttons:{
                "Add new task":function(){
                    $("#project").tabs("refresh");
                    var taskName=$("#newTask").val();
                    var activeTab=$("#project").tabs("option","active");
                    var title=$("#main > li:nth-child("+ (activeTab+1)+") > a").attr("href");
                    $("#project "+title).append("<li><input type='checkbox'>"+taskName+"</li>");
                    $("#newTask").val("");
                    $(this).dialog("close");
                },
                "Cancel":function(){
                    $("#newTask").val("");
                    $(this).dialog("close");
                }
            }
        });
    });

});
