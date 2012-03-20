<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Strict//EN” “http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd”>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Formul&aacute;rio din&acirc;mico</title>
        <link rel="stylesheet" href="css/default.css" type="text/css" media="all" />
        <link rel="stylesheet" type="text/css" href="css/complex.css" />
        <link rel="stylesheet" href="css/custom-theme/jquery-ui-1.8.18.custom.css" type="text/css" media="all" />
        <!--[if lte IE 7]>
                <style type="text/css"> body { font-size: 85%; } </style>
        <![endif]-->
        <script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
        <script src="js/jquery-ui-1.8.18.custom.min.js" type="text/javascript"></script>
        <script src="js/jquery.layout.js" type="text/javascript"></script>
        <script type="text/javascript" src="js/jquery-latest.js"></script>
        <script type="text/javascript" src="js/jquery-ui-latest.js"></script>
        <script type="text/javascript" src="js/jquery.layout-latest.js"></script>
        <script type="text/javascript" src="js/complex.js"></script>
        <script src="js/default.js" type="text/javascript"></script>
    </head>
    <body>
        <div class="ui-layout-west">
            <div class="header">Componentes</div>
            <div class="content">
                <div id="componentes">
                    <div id="itensComponents">
                        <h3><a href="#">Componentes de texto</a></h3>
                        <div>
                            <ul>
                                <li>
                                    <img src="images/form_input_text.ico" alt="campo de texto" title="campo de texto"  id="text" />
                                    <p><i>Campo de texto simples</i></p>
                                </li>
                                <li>
                                    <img src="images/form_input_select_single.ico" alt="caixa de sele&ccedil;&atilde;" title="caixa de sele&ccedil;&atilde;"  id="select" />
                                    <p><i>Caixa de sele&ccedil;&atilde;o simples</i></p>    
                                </li>
                            </ul>
                        </div>
                        <h3><a href="#">Bags</a></h3>
                        <div>
                            <ul>
                                <li>Zebra Striped</li>
                                <li>Black Leather</li>
                                <li>Alligator Leather</li>
                            </ul>
                        </div>
                        <h3><a href="#">Gadgets</a></h3>
                        <div>
                            <ul>
                                <li>iPhone</li>
                                <li>iPod</li>
                                <li>iPad</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui-layout-east">
            <div class="header">Propriedades</div>
            <div class="content">
                <div id="propriedades">
                    <div id="itensComponentsPropriedade">
                        <h3><a href="#">Bags</a></h3>
                        <div>
                            <ul>
                                <li>Zebra Striped</li>
                                <li>Black Leather</li>
                                <li>Alligator Leather</li>
                            </ul>
                        </div>
                        <h3><a href="#">Gadgets</a></h3>
                        <div>
                            <ul>
                                <li>iPhone</li>
                                <li>iPod</li>
                                <li>iPad</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui-layout-north">
            <div style="width: 100%;height: 30px; text-align: left;">
                sistema
            </div>
            <ul class="toolbar">
                <li id="tbarToggleNorth" class="first"><span></span>Toggle NORTH</li>
                <li id="tbarOpenSouth"><span></span>Open SOUTH</li>
                <li id="tbarCloseSouth"><span></span>Close SOUTH</li>
                <li id="tbarPinWest"><span></span>Pin/Unpin WEST</li>
                <li id="tbarPinEast" class="last"><span></span>Pin/Unpin EAST</li>
            </ul>
        </div>
        <div class="ui-layout-south">
            RODAPE
        </div>
        <div class="ui-layout-center" id="mainContent">
        </div>
    </body>
</html>