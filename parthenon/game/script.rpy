# The script of the game goes in this file.

# Declare characters used by this game. The color argument colorizes the
# name of the character.

define e = Character("Cassidy")


# The game starts here.

label splashscreen:

 "imageherer" with Dissolve(1.0)
 pause 2.0

 "imageherer" with Dissolve(1.0)
 pause 0.5

    scene black
    with Pause(1)

    play sound "soundherer"

label start:
"dijk"

    scene bg room

    # This shows a character sprite. A placeholder is used, but you can
    # replace it by adding a file named "eileen happy.png" to the images
    # directory.

    show Cassidy happy

    # These display lines of dialogue.

    e "You've created a new Ren'Py game."

    e "Once you add a story, pictures, and music, you can release it to the world!"

    # This ends the game.

    return



