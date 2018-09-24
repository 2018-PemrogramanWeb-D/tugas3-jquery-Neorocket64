$(document).ready(function()
{
	$("#why").hide();
    $("#tomboru1").click(function()
	{
    	$("#stratos").animate({ left: '700px' });
		$("#why").fadeIn();
    });
	$("#tomboru2").click(function()
	{
		$("#suffer").text($("#txtinput").val());
	})
	$("#tblinput").on("keyup", function()
	{
		var value = $(this).val().toLowerCase();
		$("#tabel tr").filter(function()
		{
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});