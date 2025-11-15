# The script of the game goes in this file.

# Declare characters used by this game. The color argument colorizes the
# name of the character.

define athena = Character("Athena")


# The game starts here.

label start:

    # Show a background. This uses a placeholder by default, but you can
    # add a file (named either "bg room.png" or "bg room.jpg") to the
    # images directory to show it.

    scene bg room

    # This shows a character sprite. A placeholder is used, but you can
    # replace it by adding a file named "eileen happy.png" to the images
    # directory.

    show athena happy

    # These display lines of dialogue.

    athena "Welcome to New York!"

    show athena sad
    athena "Sadly, it isn’t a very welcoming “welcome to new york”. As you can see, the city has been at war with each other for many years." 
    show athena happy
    athena"But I’m glad you came! I see potential in you. Together, with the help of other gods, we can bring peace to this city."
    athena "Are you ready to begin your journey?"
    ready = false #correct formatting???
    menu :
        "Yes, I am ready!" :
            show athena excited
            athena "Great! Let's start!"
            $ ready = true
        "No, I'm not ready yet." :
            show athena sad
            athena "Aw. You had great potential. Come back when you feel ready."
            $ ready = false


    # This ends the game.

    return
