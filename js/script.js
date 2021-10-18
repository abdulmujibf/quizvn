/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<img scr=" https://www.youtube.com/watch?v=e8oJXZIZ-Bk" />
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {
	'modul-1': 'modul-1.mp4'
});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'class': "bg-class.jpg"
});


// Define the Characters
monogatari.characters({
	'mc': {
		name: 'Ibu Harta',
		color: '#000aaa',
		sprites: {
			salam: "Salam.png",
			kepo: "Kepo.png"
		}
	}
});

monogatari.script({
	// The game starts here.
	'Start': [
		'show background class fadeIn',
		'wait 1500',
		'show character mc salam at left with fadeIn',
		`mc Hai sahabat Ibu Harta! 🥰
		Kenalkan, saya Ibu Harta. Selamat datang di pelatihan bersama YCAB. Hari ini saya mau ajak Sahabat Ibu Harta buat belajar berbagai topik. Mulai dari COVID-19, kelola stres, kelola keuangan, cara urus ijin usaha dan pinjaman online. Udah siap? Yuk kita mulai!`,
		{
			'Input': {
				'Text': `Karena tak kenal maka tak sayang, kita kenalan dulu ya. Ketik nama lengkapnya ya! 🥰
	
				Nama Sahabat siapa?`,
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		{
			'Choice': {
				'Dialog': 'mc Apa {{player.name}} benar nama lengkap Sahabat? ',
				'Yes': {
					'Text': 'Benar',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'Salah',
					'Do': 'jump No'
				}
			}
		},
	],

	'Yes': [
		'jump gender'
	],

	'No': [
		{
			'Input': {
				'Text': `mc Kalau salah, yuk ketik nama lengkapnya dengan benar.`,
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'jump confirm_name'
	],

	// confirm_name
	'confirm_name': [
		{
			'Choice': {
				'Dialog': 'mc Apa {{player.name}} benar nama lengkap Sahabat? ',
				'Yes': {
					'Text': 'Benar',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'Salah',
					'Do': 'jump No'
				}
			}
		}
	],

	// *Gender
	'gender': [
		{
			'Choice': {
				'Dialog': 'mc Sahabat Ibu Harta jenis kelaminnya apa? 🤔',
				'Laki - Laki': {
					'Text': 'Laki - Laki',
					'onChosen': function () {
						this.storage({
							player: {
								gender: 'Laki - laki',
							}
						})
					},
					"Do": "jump age"
				},
				'Perempuan': {
					'Text': 'Perempuan',
					'onChosen': function () {
						this.storage({
							player: {
								gender: 'Perempuan'
							}
						})
					},
					"Do": "jump age"
				}
			}
		}
	],

	// *Age
	'age': [
		"hide character mc salam with fadeOut",
		'wait 1500',
		"show character mc kepo at left with fadeIn",
		"wait 1000",
		{
			'Choice': {
				'Dialog': 'mc Ibu Harta penasaran nih...  Sahabat Ibu Harta umurnya berapa? Silakan pilih dari pilihan ini ya! 😄',
				'Kurang dari 18 Tahun': {
					'Text': 'Kurang dari 18 Tahun',
					'onChosen': function () {
						this.storage({
							player: {
								age: 'Kurang dari 18 Tahun'
							}
						})
					},
					'Do': "jump place"
				},
				'18-24 Tahun': {
					'Text': '18-24 Tahun',
					'onChosen': function () {
						this.storage({
							player: {
								age: '18-24 Tahun'
							}
						})
					},
					'Do': "jump place"
				},
				'25-35 Tahun': {
					'Text': '25-35 Tahun',
					'onChosen': function () {
						this.storage({
							player: {
								age: '25-35 Tahun'
							}
						})
					},
					'Do': "jump place"
				},
				'36-40 Tahun': {
					'Text': '36-40 Tahun',
					'onChosen': function () {
						this.storage({
							player: {
								age: '36-40 Tahun'
							}
						})
					},
					'Do': "jump place"
				},
				'Lebih dari 40 Tahun': {
					'Text': 'Lebih dari 40 Tahun',
					'onChosen': function () {
						this.storage({
							player: {
								age: 'Lebih dari 40 Tahun'
							}
						})
					},
					'Do': "jump place"
				},
			}
		},
	],

	// *Place
	'place': [
		{
			'Choice': {
				'Dialog': 'mc Sahabat Ibu Harta tinggalnya di daerah mana? Kalau Ibu Harta tinggalnya di dalam WhatsApp 📱. Tolong pilih dari pilihan ini ya! 🏡',
				'Jabodetabek': {
					'Text': 'Jabodetabek',
					'onChosen': function () {
						this.storage({
							player: {
								place: 'Jabodetabek'
							}
						})
					},
					"Do": "jump kabupatenOrKota"
				},
				'Banten': {
					'Text': 'Banten',
					'onChosen': function () {
						this.storage({
							player: {
								place: 'Banten'
							}
						})
					},
					"Do": "jump kabupatenOrKota"
				},
				'Jawa Tengah': {
					'Text': 'Jawa Tengah',
					'onChosen': function () {
						this.storage({
							player: {
								place: 'Jawa Tengah'
							}
						})
					},
					"Do": "jump kabupatenOrKota"
				},
				'Jawa Barat': {
					'Text': 'Jawa Barat',
					'onChosen': function () {
						this.storage({
							player: {
								place: 'Jawa Barat'
							}
						})
					},
					"Do": "jump kabupatenOrKota"
				},
				'Lainnya': {
					'Text': 'Lainnya',
					'onChosen': function () {
						this.storage({
							player: {
								place: 'Lainnya'
							}
						})
					},
					"Do": "jump kabupatenOrKota"
				},
			}
		},
	],

	// Kabupaten/Kota
	'kabupatenOrKota': [
		{
			'Input': {
				'Text': `Kalau boleh tahu, Sahabat Ibu Harta persisnya tinggal dimana, sih? Tolong ketik nama kota/kabupatennya ya! 🗺️`,
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							kotaOrKabupaten: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							kotaOrKabupaten: ''
						}
					});
				},
				'Warning': 'Harus Diisi!'
			},
		},
		"jump kecamatan"
	],

	// *Kecamatan
	'kecamatan': [
		{
			'Input': {
				'Text': `Sekarang Ibu Harta juga mau tahu, dong. Sahabat Ibu Harta tinggal di kecamatan mana, sih? Ketik nama kecamatannya, ya! 🗺️`,
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							kecamatan: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							kecamatan: ''
						}
					});
				},
				'Warning': 'Harus Diisi!'
			}
		},
		"jump tipeUsaha"
	],

	// *TipeUsaha
	'tipeUsaha': [
		{
			'Choice': {
				'Dialog': 'mc Sahabat Ibu Harta punya usaha apa? Pilih dari pilihan di bawah ya!',
				'Dagang makanan': {
					'Text': 'Dagang makanan',
					'onChosen': function () {
						this.storage({
							player: {
								tipeUsaha: 'Dagang makanan',
								jenisUsaha: "Dagang makanan"
							}
						})
					},
					"Do": "jump lamaUsaha"
				},
				'Dagang Kelontong': {
					'Text': 'Dagang Kelontong',
					'onChosen': function () {
						this.storage({
							player: {
								tipeUsaha: 'Dagang Kelontong',
								jenisUsaha: "Dagang Kelontong"
							}
						})
					},
					"Do": "jump lamaUsaha"
				},
				'Dagang Pakaian': {
					'Text': 'Dagang Pakaian',
					'onChosen': function () {
						this.storage({
							player: {
								tipeUsaha: 'Dagang Pakaian',
								jenisUsaha: "Dagang Pakaian"
							}
						})
					},
					"Do": "jump lamaUsaha"
				},
				'Jual Pulsa': {
					'Text': 'Jual Pulsa',
					'onChosen': function () {
						this.storage({
							player: {
								tipeUsaha: 'Jual Pulsa',
								jenisUsaha: "Jual Pulsa"
							}
						})
					},
					"Do": "jump lamaUsaha"
				},
				'Lainnya': {
					'Text': 'Lainnya',
					'onChosen': function () {
						this.storage({
							player: {
								tipeUsaha: 'Lainnya'
							}
						})
					},
					"Do": "jump jenisUsaha"
				},
			}
		}
	],

	// *jenisUsaha
	'jenisUsaha': [
		{
			'Input': {
				'Text': `Yuk ketik jenis usaha Sahabat Ibu Harta disini! 🤔 
				(Contoh: jasa cuci motor)`,
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							jenisUsaha: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							jenisUsaha: ''
						}
					});
				},
				'Warning': 'Harus Diisi!'
			}
		},
		"jump lamaUsaha"
	],

	// *Lama Usaha
	'lamaUsaha': [
		{
			'Choice': {
				'Dialog': 'mc Waah menarik! Udah jalan berapa lama usahanya? 😃',
				'Kurang dari 1 Tahun': {
					'Text': 'Kurang dari 1 Tahun',
					'onChosen': function () {
						this.storage({
							player: {
								lamaUsaha: 'Kurang dari 1 Tahun'
							}
						})
					},
					"Do": "jump pekerja"
				},
				'1-2 Tahun': {
					'Text': '1-2 Tahun',
					'onChosen': function () {
						this.storage({
							player: {
								lamaUsaha: '1-2 Tahun',
							}
						})
					},
					"Do": "jump pekerja"
				},
				'3-4 Tahun': {
					'Text': '3-4 Tahun',
					'onChosen': function () {
						this.storage({
							player: {
								lamaUsaha: '3-4 Tahun'
							}
						})
					},
					"Do": "jump pekerja"
				},
				'Lebih dari 4 tahun': {
					'Text': 'Lebih dari 4 tahun',
					'onChosen': function () {
						this.storage({
							player: {
								lamaUsaha: 'Lebih dari 4 tahun'
							}
						})
					},
					"Do": "jump pekerja"
				}
			}
		}
	],

	// *Pekerja
	'pekerja': [
		{
			'Choice': {
				'Dialog': 'mc Ibu Harta masih penasaran. Sahabat Ibu Harta punya pegawai berapa? Pilih dari pilihan ini ya!',
				'1 Pegawai': {
					'Text': '1 Pegawai',
					'onChosen': function () {
						this.storage({
							player: {
								pekerja: '1 Pegawai'
							}
						})
					},
					"Do": "jump omset"
				},
				'2-3 Pegawai': {
					'Text': '2-3 Pegawai',
					'onChosen': function () {
						this.storage({
							player: {
								pekerja: '2-3 Pegawai',
							}
						})
					},
					"Do": "jump omset"
				},
				'3 Pegawai': {
					'Text': '3 Pegawai',
					'onChosen': function () {
						this.storage({
							player: {
								pekerja: '3 Pegawai'
							}
						})
					},
					"Do": "jump omset"
				},
				'lebih dari 4 Pegawai': {
					'Text': 'lebih dari 4 Pegawai',
					'onChosen': function () {
						this.storage({
							player: {
								pekerja: 'lebih dari 4 Pegawai'
							}
						})
					},
					"Do": "jump omset"
				},
				'Tidak punya Pegawai': {
					'Text': 'Tidak punya Pegawai',
					'onChosen': function () {
						this.storage({
							player: {
								pekerja: 'Tidak punya Pegawai'
							}
						})
					},
					"Do": "jump omset"
				}
			}
		}
	],

	// *Omset
	'omset': [
		{
			'Choice': {
				'Dialog': 'mc Ibu Harta jadi kepo nih. Kira-kira berapa sih rata-rata omset usaha Sahabat per bulan? 🤔',
				'Kurang dari 2 juta': {
					'Text': 'Kurang dari 2 juta',
					'onChosen': function () {
						this.storage({
							player: {
								omset: 'Kurang dari 2 juta'
							}
						})
					},
					"Do": "jump phoneNumber"
				},
				'2-3 juta': {
					'Text': '2-3 juta',
					'onChosen': function () {
						this.storage({
							player: {
								omset: '2-3 juta',
							}
						})
					},
					"Do": "jump phoneNumber"
				},
				'3-4 juta': {
					'Text': '3-4 juta',
					'onChosen': function () {
						this.storage({
							player: {
								omset: '3-4 juta'
							}
						})
					},
					"Do": "jump phoneNumber"
				},
				'Lebih dari 4 juta': {
					'Text': 'Lebih dari 4 juta',
					'onChosen': function () {
						this.storage({
							player: {
								omset: 'Lebih dari 4 juta'
							}
						})
					},
					"Do": "jump phoneNumber"
				}
			}
		}
	],

	// *phoneNumber
	'phoneNumber': [
		{
			"Input": {
				"Text": "Ibu Harta mau tahu nomor telepon Sahabat dong. Tolong ketik nomor telepon yang masih aktif dan bisa ditelepon/SMS ya.",
				'Validation': function (input) {
					var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
					return input.trim().match(phoneno);
				},
				'Save': function (input) {
					this.storage({
						player: {
							phoneNumber: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							phoneNumber: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		"jump nasabah"
	],

	// *Nasabah
	'nasabah': [
		{
			'Choice': {
				'Dialog': 'mc Sahabat Ibu Harta udah berapa lama jadi nasabah/klien YCAB? 💵💰',
				'Kurang dari 1 tahun': {
					'Text': 'Kurang dari 1 tahun',
					'onChosen': function () {
						this.storage({
							player: {
								nasabah: 'Kurang dari 1 tahun'
							}
						})
					},
					// "Do": "jump phoneNumber"
				},
				'1-2 tahun': {
					'Text': '1-2 tahun',
					'onChosen': function () {
						this.storage({
							player: {
								nasabah: '1-2 tahun',
							}
						})
					},
					// "Do": "jump phoneNumber"
				},
				'3-4 tahun': {
					'Text': '3-4 tahun',
					'onChosen': function () {
						this.storage({
							player: {
								nasabah: '3-4 tahun'
							}
						})
					},
					// "Do": "jump phoneNumber"
				},
				'Lebih dari 4 tahun': {
					'Text': 'Lebih dari 4 tahun',
					'onChosen': function () {
						this.storage({
							player: {
								nasabah: 'Lebih dari 4 tahun'
							}
						})
					},
					// "Do": "jump phoneNumber"
				},
				'bukan/belum menjadi nasabah YCAB': {
					'Text': 'bukan/belum menjadi nasabah YCAB',
					'onChosen': function () {
						this.storage({
							player: {
								nasabah: 'bukan/belum menjadi nasabah YCAB'
							}
						})
					},
					// "Do": "jump phoneNumber"
				}
			}
		},
		"jump recordData"
	],

	'recordData': [
		"Nama: {{player.name}}, Jenis Kelamin: {{player.gender}} Umur: {{player.age}}",
		"Provinsi: {{player.place}}, Kota / Kabupaten: {{player.kotaOrKabupaten}}, Kecamatan: {{player.kecamatan}}",
		"Tipe usaha: {{player.tipeUsaha}}, Jenis Usaha: {{player.jenisUsaha}}, Lama Usaha: {{player.lamaUsaha}}",
		"Pekerja: {{player.pekerja}}, Omset: {{player.omset}}, Nomor Telepon: {{player.phoneNumber}}",
		"Nasabah: {{player.nasabah}}, Grup: {{player.grup}}",
		"end"
	]
});

