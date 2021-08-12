import random

warp_squad = list(range(0, 8888))
random.shuffle(warp_squad)
warp_squad = warp_squad[:16]

guardian_marked = list(range(0, 8888))
random.shuffle(guardian_marked)
guardian_marked = guardian_marked[:42]

radioactive = list(range(0, 8888))
random.shuffle(radioactive)
radioactive = radioactive[:84]
