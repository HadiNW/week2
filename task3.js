var nama = 'hadi';
var peran = 'tabib';

if (nama && peran) {
    console.log('Selamat datang di Dunia Proxytia, '+ nama);
    console.log('Halo '+ peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
}
else if (nama === '') {
    console.log('Nama harus diisi!');
}
else if (peran === '') {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
}