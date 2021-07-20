from generation.getComponents import get_cockpit, get_stars, get_leftarm, get_legs, get_panels, get_rightarm, get_space, \
    get_windows


def main():
    leftarms = get_leftarm()
    legs = get_legs()
    panels = get_panels()
    rightarms = get_rightarm()
    spaces = get_space()
    stars = get_stars()
    cockpits = get_cockpit()
    windows = get_windows()

    for (i, (leftarm, leg, panel, rightarm, space, star, cockpit, window)) in enumerate(
            zip(leftarms, legs, panels, rightarms, spaces, stars, cockpits, windows)):
        # Star is base
        star.paste(space, mask=space)
        star.paste(window, mask=window)
        star.paste(cockpit, mask=cockpit)
        star.paste(leftarm, mask=leftarm)
        star.paste(rightarm, mask=rightarm)
        star.paste(leg, mask=leg)
        star.paste(panel, mask=panel)

        star.save(f'output/output{i:03}.png')

    return


if __name__ == "__main__":
    main()
