$(function() {
    var outerLayout;
    $(document).ready(function () {
	outerLayout = $("body").layout( layoutSettings_Outer );
        
        // BIND events to hard-coded buttons in the NORTH toolbar
		outerLayout.addToggleBtn( "#tbarToggleNorth", "north" );
		outerLayout.addOpenBtn( "#tbarOpenSouth", "south" );
		outerLayout.addCloseBtn( "#tbarCloseSouth", "south" );
		outerLayout.addPinBtn( "#tbarPinWest", "west" );
		outerLayout.addPinBtn( "#tbarPinEast", "east" );

		// save selector strings to vars so we don't have to repeat it
		// must prefix paneClass with "body > " to target ONLY the outerLayout panes
		var westSelector = "body > .ui-layout-west"; // outer-west pane
		var eastSelector = "body > .ui-layout-east"; // outer-east pane

		 // CREATE SPANs for pin-buttons - using a generic class as identifiers
		$("<span></span>").addClass("pin-button").prependTo( westSelector );
		$("<span></span>").addClass("pin-button").prependTo( eastSelector );
		// BIND events to pin-buttons to make them functional
		outerLayout.addPinBtn( westSelector +" .pin-button", "west");
		outerLayout.addPinBtn( eastSelector +" .pin-button", "east" );

		 // CREATE SPANs for close-buttons - using unique IDs as identifiers
		$("<span></span>").attr("id", "west-closer" ).prependTo( westSelector );
		$("<span></span>").attr("id", "east-closer").prependTo( eastSelector );
		// BIND layout events to close-buttons to make them functional
		outerLayout.addCloseBtn("#west-closer", "west");
		outerLayout.addCloseBtn("#east-closer", "east");
    });
    var layoutSettings_Outer = {
		name: "outerLayout" // NO FUNCTIONAL USE, but could be used by custom code to 'identify' a layout
		// options.defaults apply to ALL PANES - but overridden by pane-specific settings
	,	defaults: {
			size:					"auto"
		,	minSize:				50
		,	paneClass:				"pane" 		// default = 'ui-layout-pane'
		,	resizerClass:			"resizer"	// default = 'ui-layout-resizer'
		,	togglerClass:			"toggler"	// default = 'ui-layout-toggler'
		,	buttonClass:			"button"	// default = 'ui-layout-button'
		,	contentSelector:		".content"	// inner div to auto-size so only it scrolls, not the entire pane!
		,	contentIgnoreSelector:	"span"		// 'paneSelector' for content to 'ignore' when measuring room for content
		,	togglerLength_open:		35			// WIDTH of toggler on north/south edges - HEIGHT on east/west edges
		,	togglerLength_closed:	35			// "100%" OR -1 = full height
		,	hideTogglerOnSlide:		true		// hide the toggler when pane is 'slid open'
		,	togglerTip_open:		"Close This Pane"
		,	togglerTip_closed:		"Open This Pane"
		,	resizerTip:				"Resize This Pane"
		//	effect defaults - overridden on some panes
		,	fxName:					"slide"		// none, slide, drop, scale
		,	fxSpeed_open:			750
		,	fxSpeed_close:			1500
		,	fxSettings_open:		{easing: "easeInQuint"}
		,	fxSettings_close:		{easing: "easeOutQuint"}
	}
	,	north: {
			spacing_open:			1			// cosmetic spacing
		,	togglerLength_open:		0			// HIDE the toggler button
		,	togglerLength_closed:	-1			// "100%" OR -1 = full width of pane
		,	resizable: 				false
		,	slidable:				false
		//	override default effect
		,	fxName:					"none"
		}
	,	south: {
			maxSize:				200
		,	spacing_closed:			0			// HIDE resizer & toggler when 'closed'
		,	slidable:				false		// REFERENCE - cannot slide if spacing_closed = 0
		,	initClosed:				true
		//	CALLBACK TESTING...
		,	onhide_start:			function () {return confirm("START South pane hide \n\n onhide_start callback \n\n Allow pane to hide?");}
		,	onhide_end:				function () {alert("END South pane hide \n\n onhide_end callback");}
		,	onshow_start:			function () {return confirm("START South pane show \n\n onshow_start callback \n\n Allow pane to show?");}
		,	onshow_end:				function () {alert("END South pane show \n\n onshow_end callback");}
		,	onopen_start:			function () {return confirm("START South pane open \n\n onopen_start callback \n\n Allow pane to open?");}
		,	onopen_end:				function () {alert("END South pane open \n\n onopen_end callback");}
		,	onclose_start:			function () {return confirm("START South pane close \n\n onclose_start callback \n\n Allow pane to close?");}
		,	onclose_end:			function () {alert("END South pane close \n\n onclose_end callback");}
		//,	onresize_start:			function () { return confirm("START South pane resize \n\n onresize_start callback \n\n Allow pane to be resized?)"); }
		,	onresize_end:			function () {alert("END South pane resize \n\n onresize_end callback \n\n NOTE: onresize_start event was skipped.");}
		}
	,	west: {
			size:					250
		,	spacing_closed:			21			// wider space when closed
		,	togglerLength_closed:	21			// make toggler 'square' - 21x21
		,	togglerAlign_closed:	"top"		// align to top of resizer
		,	togglerLength_open:		0			// NONE - using custom togglers INSIDE west-pane
		,	togglerTip_open:		"Close West Pane"
		,	togglerTip_closed:		"Open West Pane"
		,	resizerTip_open:		"Resize West Pane"
		,	slideTrigger_open:		"click" 	// default
		,	initClosed:				true
		//	add 'bounce' option to default 'slide' effect
		,	fxSettings_open:		{easing: "easeOutBounce"}
		}
	,	east: {
			size:					250
		,	spacing_closed:			21			// wider space when closed
		,	togglerLength_closed:	21			// make toggler 'square' - 21x21
		,	togglerAlign_closed:	"top"		// align to top of resizer
		,	togglerLength_open:		0 			// NONE - using custom togglers INSIDE east-pane
		,	togglerTip_open:		"Close East Pane"
		,	togglerTip_closed:		"Open East Pane"
		,	resizerTip_open:		"Resize East Pane"
		,	slideTrigger_open:		"mouseover"
		,	initClosed:				true
		//	override default effect, speed, and settings
		,	fxName:					"drop"
		,	fxSpeed:				"normal"
		,	fxSettings:				{easing: ""} // nullify default easing
		}
	,	center: {
			paneSelector:			"#mainContent" 			// sample: use an ID to select pane instead of a class
		,	onresize:				"innerLayout.resizeAll"	// resize INNER LAYOUT when center pane resizes
		,	minWidth:				200
		,	minHeight:				200
		}
	};
    /**
     *Focus no elemento no form
     **/
    $(".placeholder").focusin(function() {
        alert("forus")
    });
//    $( "#dropArea" ).resizable({
//        ghost: true
//    });
    /**
     * Obtendo a identifica√ß√£o do objeto no clique
     **/
    var elemet = "";
    $("#itensComponents img").mousedown(function(){
        elemet = $(this).context.id; 
    });
    /**
     * Paleta de componentes
     **/
    $( "#itensComponents" ).accordion({
        collapsible: true,
        fillSpace: true
    });
    /**
     * Paleta das propriedades
     **/
    $( "#itensComponentsPropriedade" ).accordion({
        collapsible: true,
        fillSpace: true
    });
    /**
     * 
     **/
    $( "#itensComponents li" ).draggable({
        appendTo: "body",
        helper: "clone"
    });
    /**
     * √Årea de trabalho
     **/
    
    var strBotaoFechar = "<div class='close' alt='Fechar' onclick='$(this).parent().remove();' title='Fechar'>X</div>";
    var strNomeInputRandomico;
    $( ".ui-layout-center" ).droppable({
        activeClass: "imgZindexBot",
        hoverClass: "ativar",
        accept: ":not(.ui-sortable-helper)",
        drop: function( event, ui ) {
            /*Gerando um nome dinamico para o campo*/
            strNomeInputRandomico = md5(date("Y-m-d h:i:s.u"));
            //alert(strNomeInputRandomico);
            
            $( this ).find( ".placeholder" ).remove();
            switch (elemet){
                case "text" :
                    $( "<li class='edit' onclick='alteraDadosGrid($(\"#campo"+strNomeInputRandomico+"\"))'></li>" )
                        .html( "<p><i>Campo de texto</i> <br /> <input readonly='readonly' id='campo"+strNomeInputRandomico+"' type='text'/></p>"+strBotaoFechar )
                        .appendTo( this );
                    elemet = "";
                    break;
                case "select" :
                    $( "<li class='edit' onclick='alteraDadosGrid($(\"#campo"+strNomeInputRandomico+"\"))'></li>" )
                        .html( "<p><i>Caixa de sele&ccedil;&atilde;o</i><br /><select readonly='readonly' id='campo"+strNomeInputRandomico+"'><option>Selecione</option></select></p>"+strBotaoFechar )
                        .appendTo( this );
                    elemet = "";
                    break;
                case "radio" :
                    $( "<li class='edit' onclick='alteraDadosGrid($(\"#campo"+strNomeInputRandomico+"\"))'></li>" )
                        .html( "<p><i>Campo de Sele&ccedil;&atilde;o &uacute;nica</i> <br /> <input id='campo"+strNomeInputRandomico+"' readonly='readonly' type='radio'/> Op&ccedil;&atilde;o 1 <br /> <input readonly='readonly' type='radio'/>  Op&ccedil;&atilde;o 2</p> "+strBotaoFechar )
                        .appendTo( this );
                    elemet = "";
                    break;
                case "checkbox" :
                    $( "<li class='edit' onclick='alteraDadosGrid($(\"#campo"+strNomeInputRandomico+"\"))'></li>" )
                        .html( "<p><i>Campo de Sele&ccedil;&atilde;o multipla</i> <br /> <input id='campo"+strNomeInputRandomico+"'  readonly='readonly' type='checkbox'/> Op&ccedil;&atilde;o 1 <br /> <input type='checkbox' readonly='readonly' />  Op&ccedil;&atilde;o 2</p>"+strBotaoFechar )
                        .appendTo( this );
                    elemet = "";
                    break;
                default :
//                    $( "<li class='edit' onclick='alert(\"teste\")'></li>" )
//                        .text( ui.draggable.text() )
//                        .appendTo( this );
                    break;
            }
        }
    }).
        /**
         * Ordena√ß√£o
         **/
        sortable({
        items: "li:not(.placeholder)",
        sort: function() {
            $( this ).removeClass( "ui-state-default" );
        }
    });
});

/*parte que dispara o gatilho que habilitar· a ediÁ„o dos atributos do elemento*/
//$( ".mainContent li" ).click(function(){
//    alert("testes :)")
//    
//})

function alteraDadosGrid(campo){

    var strTipo =  campo.is("select") ? "select" : campo.attr("type");
    var strLabel = campo.parent().find("i").html();
    //alert("teste-> " + strTipo);

    switch(strTipo){
        case "text" :
            var numrSize = campo.attr("size") === undefined ? "5" : campo.attr("size");
            var seletorOpt = 'opt_' + campo.attr("id");
            
            
            $('div[pane="east"] .content #propriedades #itensComponentsPropriedade .ui-widget-content')
                .css("height","140px")
                .html( ' <div>' +
                       '         <div>Campo de texto</div>' + 
                       '     <ul>' +
                       '         <li class="small">Tamanho <input style="width: 70px;" type="text" name="tamanho" id="tamanho" value="'+ numrSize +'" onkeyup="editarCampo(\'#' + campo.attr("id") + '\', \'size\', this.value);" /></li>' +
                       '         <li class="small">Label <input style="width: 100px;" type="text" name="label" id="label" value="'+ strLabel +'" onkeyup="editarLabel(\'#' + campo.attr("id") + '\', this.value);"  /></li>' +
                       '         <li class="small"> ' +
                       '            Tipo '+
                       '            <select id="'+seletorOpt+'" onchange="alteraTipoCampo(\'#' + campo.attr("id") + '\', $(\'#'+seletorOpt+'\').val())"> ' +
                       '            <option>Selecione</option> ' +
                       '            <option value="1">Numerico</option> ' +
                       '            <option value="2">Dinheiro</option> ' +
                       '            <option value="3">Texto</option> ' +
                       '            </select>' +
                       '       </li>' +
                       '     </ul>' +
                       ' </div>' );
            break; 
        case "select" :
            
            $('div[pane="east"] .content #propriedades #itensComponentsPropriedade .ui-widget-content')
                .css("height","140px")
                .html( ' <div>' +
                       '         <div>Caixa de selecao</div>' +
                       '         <li class="small">Label <input style="width: 100px;" type="text" name="label" id="label" value="'+ strLabel +'" onkeyup="editarLabel(\'#' + campo.attr("id") + '\', this.value);" /></li>' +
                       ' </div>' );
            break; 
        case "radio" :
            
            $('div[pane="east"] .content #propriedades #itensComponentsPropriedade .ui-widget-content')
                .css("height","140px")
                .html( ' <div>' +
                       '         <div>Selecao unica</div>' + 
                       '     <ul>' +
                       '         <li class="small">Label <input style="width: 100px;" type="text" name="label" id="label" value="'+ strLabel +'" onkeyup="editarLabel(\'#' + campo.attr("id") + '\', this.value);" /></li>' +
                       '     </ul>' +
                       ' </div>' );
            break; 
        case "checkbox" :
            
            $('div[pane="east"] .content #propriedades #itensComponentsPropriedade .ui-widget-content')
                .css("height","140px")
                .html( ' <div>' +
                       '         <div>Selecao multipla</div>' + 
                       '     <ul>' +
                       '         <li class="small">Label <input style="width: 100px;" type="text" name="label" id="label" value="'+ strLabel +'" onkeyup="editarLabel(\'#' + campo.attr("id") + '\', this.value);" /></li>' +
                       '     </ul>' +
                       ' </div>' );
            break; 
        default:
            resetaAtributos();
    }
}

function editarCampo(seletor, atributo, valor){
    $(seletor).attr(atributo, valor);
}

function editarLabel(seletor, valor){
    $(seletor).parent().find("i").html(valor);
}

function resetaAtributos(){
    $('div[pane="east"] .content #propriedades #itensComponentsPropriedade .ui-widget-content')
        .css("height","13px")
        .html( '<span class="small">Selecione um campo</span>' );
}

function alteraTipoCampo(seletorAlvo, tipo){
    var strVal;
    
    //alert(seletorAlvo + " - " + tipo);// return true;
    
    switch(tipo){
        case "1" :strVal = "0";break; // Inteiro
        case "2" :strVal = "R$ 0,00";break; // Monetario
        case "3" :strVal = "xxxxxx";break; // Texto
        /*case 4 : strVal = "0"; break; // Inteiro
        case 5 : strVal = "0"; break; // Inteiro*/
        default :strVal = "";break;
    }
    
    //alert("Tipo selecionado: "+ tipo +"Valor: " + strVal);
    
    $(seletorAlvo).val(strVal);
}

//resetaAtributos();