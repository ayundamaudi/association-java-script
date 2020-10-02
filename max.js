var nilai = [5,7,1,6,8,10,22,13,7,8];
var max_ = 0, i;
for (i=0;i < nilai.length;i++)
{
  if (nilai[i] > max_)
  {
    max_ = nilai[i];
  }
}
console.log("Nilai Terbesar");
console.log(max_);