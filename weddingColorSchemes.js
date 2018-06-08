$(document).ready(function() {
      var generatePalette = function(name, a, b, c, d, e) {
        var $paletteAndTitle = $('<div class = "paletteAndTitle"></div>');
        $('.colorPaletteContainer').append($paletteAndTitle);
        var $title = $('<h3></h3>');
        $title.text(name);
        var palette = $('<div class = "palettes"></div>');
        palette.append($('<div class= "swatch"></div>').css('background-color', a));
        palette.append($('<div class= "swatch"></div>').css('background-color', b));
        palette.append($('<div class= "swatch"></div>').css('background-color', c));
        palette.append($('<div class= "swatch"></div>').css('background-color', d));
        palette.append($('<div class= "swatch"></div>').css('background-color', e));
        $title.appendTo('.colorPaletteContainer');
        palette.appendTo('.colorPaletteContainer');
      }
      generatePalette('Peachy Peachy Flowers', '#FFDAB9', '#FFA07A', '#FF7F50', '#DAA520', '#FFFFF0');
      generatePalette('Romantic Blush', '#EAB1B8', '#ECB3D4', '#FFF3FF', '#7F4D6A', '#FFFFFE');
      generatePalette('Pastel Spring', '#DFE1F7', '#F6CBD6', '#FDFACD', '#C1DCF7', '#FCF6E8');
      generatePalette('Gentle Greens', '#5C855D', '#009D60', '#FDFACD', '#CDF6B4', '#FFFFF0');
      generatePalette('Tropical Brights', '#00809D', '#FFFF00', '#076C31', '#FF3098', '#FF0000');
      generatePalette('Graphic Pop', '#494949', '#FE5C67', '#E48C71', '#D3D3D3', '#FCF6E8');
      generatePalette('Dreamy Winter', '#00BFFF', '#6495ED', '#D3D3D3', '#F0FFFF', '#FFFFFF');
      generatePalette('Lilac Lavender', '', '', '', '', '');
      generatePalette('Chinese Inspired', '', '', '', '', '');
      generatePalette('Autumn Warmth', '', '', '', '', '');
      generatePalette('Sapphires and Emeralds', '', '', '', '', '');

})