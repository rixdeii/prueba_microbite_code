def on_sound_loud():
    pass
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_b():
    global isPressed
    if isPressed:
        isPressed = False
        basic.show_string("fernanda")
    else:
        isPressed = True
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # . . . .
                        . # . . .
                        . . # . .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_icon(IconNames.HEART)