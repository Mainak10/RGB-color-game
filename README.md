# RGB Color Guess Game
A Javascript based web app to visualize how RGB color model works.
# [Demo](https://mainak10.github.io/RGB-color-game/color-game.html/)

## Brief about RGB color Model
The RGB color model is one of the most widely used color representation method in Web applications. It use a color coordinate system with three primary colors:

R(red), G(green), B(blue) 

Each primary color can take an intensity value ranging from 0(lowest) to 255(highest). Mixing these three primary colors at different intensity levels produces a variety of colors. The collection of all the colors obtained by such a linear combination of red, green and blue forms an unique color.
<br/>
e.g: **RGB(255, 0 , 0) --> Generates Red.**
<br/>
For Details have a look on this [RGB color Model](https://en.wikipedia.org/wiki/RGB_color_model)
## How to Play
On loading of the application you will be given one set of RGB color combination on the header of the app something like **RGB(233,45,60)**. You have to guess correct color among the alternate colors. The number of color options will vary depending on the which mode you are playing.

There are two options:

 - **Easy Mode:**   3 color options.
 - **Hard Mode:**  6 color options.

The color sets and the RGB combination will always change clicking upon the **NEW COLOR** button.
You can always reset the game by clicking **PLAY AGAIN** button at any mode.
## Win or Lose?
On selecting the correct color all the colors will get change with correct color with the text saying **Correct!**.
<br/>
On selecting the wrong option the selected color will be invisible with the text **Try Again**
		
