cd outout || exit

for i in {0..49}
do
  cd "$i" || exit
  ffmpeg -r 15 -start_number 0 -i "${i}_%05d.png" -c:v libx264 -pix_fmt yuv420p ../"${i}".mp4
  cd ..
  done
