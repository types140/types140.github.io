$("#mission_list > .missionSideBarEntry").each(function(){
        let missionId = $(this).attr("id").replace("mission_", "");
        doit(missionId);
    });

    function doit(id){
        let patients = $("#mission_patient_summary_" + id).length ? $("#mission_patient_summary_" + id + " > strong").text().replace(" Patienten", "") : $("#mission_patients_" + id).children().length;

        if(($("#mission_panel_" + id).hasClass("mission_panel_green") && patients == "0") || $("#mission_panel_" + id).hasClass("mission_deleted")) {
            $("#mission_" + id).css("display", "none");
        } else {
            $("#mission_" + id).css("display", "");
        }

        $("#mission_vehicle_state_" + id).prependTo($("#mission_panel_heading_" + id));
        $("#mission_panel_" + id + " .panel-body").css("display", "none");
        $("#mission_panel_patients_" + id).length ? $("#mission_panel_patients_" + id).text(`Pat.: ${patients}`) : $("#mission_panel_heading_" + id).append(`<small id="mission_panel_patients_${id}" class="pull-right">Pat.: ${patients}</small>`);
    }

    let missionMarkerOrig = missionMarkerAdd;
    missionMarkerAdd = e => {
        missionMarkerOrig(e);
        doit(e.id);
    };
