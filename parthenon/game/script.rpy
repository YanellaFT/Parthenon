# The script of the game goes in this file.

# Declare characters used by this game. The color argument colorizes the
# name of the character.

define e = Character("Cassidy")


# The game starts here.

label splashscreen:
    scene black
    with Pause(1)

    play sound "jjfjghfkjhg"

    show splash with dissolve
    with Pause (2)

label start:
"dijk

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


