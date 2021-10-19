/* global monogatari */
// const axios = require('../app');
// import axios from "axios"

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

monogatari.component('main-screen').template(() => {
	return `
			<h1>Ibu Harta</h1>
	`;
});

// monogatari.component('quick-menu').removeButton("Back")

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
// *Character
monogatari.characters({
	'mc': {
		name: 'Ibu Harta',
		color: '#fff',
		sprites: {
			salam: "Salam.png",
			kepo: "Kepo.png",
			kuis: "Kuis.png",
			thanks: "TerimaKasih.png",
			bye: "Bye.png"
		}
	}
});

monogatari.script({
	// The game starts here.
	'Start': [
		'show background class fadeIn',
		'wait 2000',
		'show character mc salam at left with slide-in',
		"wait 2000",
		"show character mc salam at left with breath",
		// function () {
		// 	const form = new FormData();
		// 	console.log(form)
		// 	return true;
		// },
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
					'Do': 'jump Yes',
				},
				'No': {
					'Text': 'Salah',
					'Do': 'jump No'
				}
			}
		},
	],

	'Yes': [
		"hide character mc salam with slide-out",
		"wait 2000",
		"show character mc kepo at left with slide-up",
		"wait 2000",
		"show character mc kepo at left with breath",
		"jump gender"
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

	// *confirm_name
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

	// *Kabupaten/Kota
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
				'Warning': 'Invalid Nomor Telepon'
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
					"Do": "jump grup"
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
					"Do": "jump grup"
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
					"Do": "jump grup"
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
					"Do": "jump grup"
				},
				'bukan/belum menjadi nasabah YCAB': {
					'Text': 'bukan/belum menjadi nasabah YCAB',
					'onChosen': function () {
						this.storage({
							player: {
								nasabah: 'bukan/belum menjadi nasabah YCAB',
								grup: "None"
							}
						})
					},
					"Do": "jump goToQuestion"
				}
			}
		},
		// "jump recordData"
	],

	// *Grup
	"grup": [
		{
			"Input": {
				"Text": `Kalau boleh tahu, Sahabat Ibu Harta nama kelompoknya apa? Ketik nama kelompoknya ya!
				(Contoh: Mawar)`,
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							grup: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							grup: ''
						}
					});
				},
				'Warning': 'Harus Diisi'
			},
		},
		"jump goToQuestion"
	],

	// *GoToQuestion
	"goToQuestion": [
		"hide character mc kepo with slide-down",
		"wait 2000",
		"show character mc kuis at right with slide-in-reverse",
		"show character mc kuis at right with breath",
		"wait 2000",
		`mc Sebelum mulai pelatihannya, Ibu Harta mau adain kuis singkat untuk tahu seberapa Sahabat paham tentang topik yang akan dipelajari. Tolong jawab pertanyaan-pertanyaan ini dan tak perlu takut salah jawab. 📝
		Buat jawab.`,
		"mc Sahabat Sudah Siap ?!, Yuk Kita Mulai",
		"jump question1"
	],

	// *Pre Question

	// *Pre 1
	'question1': [
		{
			'Choice': {
				'Dialog': 'mc Apa yang pertama harus kita lakukan saat kelola uang pribadi? 🤔',
				'Bedakan kebutuhan dan keinginan': {
					'Text': 'Bedakan kebutuhan dan keinginan',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_1: 'Bedakan kebutuhan dan keinginan'
							}
						})
					},
					"Do": "jump question2"
				},
				'Campur uang usaha dan pribadi jadi satu': {
					'Text': 'Campur uang usaha dan pribadi jadi satu',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_1: 'Campur uang usaha dan pribadi jadi satu',
							}
						})
					},
					"Do": "jump question2"
				},
				'Bikin rencana pengeluaran': {
					'Text': 'Bikin rencana pengeluaran',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_1: 'Bikin rencana pengeluaran'
							}
						})
					},
					"Do": "jump question2"
				},
				'Bikin catatan keuangan/pembukuan': {
					'Text': 'Bikin catatan keuangan/pembukuan',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_1: 'Bikin catatan keuangan/pembukuan'
							}
						})
					},
					"Do": "jump question2"
				}
			}
		}
	],

	// *Pre 2
	'question2': [
		{
			'Choice': {
				'Dialog': 'mc Kita bisa pakai laba/keuntungan usaha buat hal-hal ini, kecuali... 🤔',
				'Pakai semua laba/keuntungan buat bayar cicilan rumah': {
					'Text': 'Pakai semua laba/keuntungan buat bayar cicilan rumah',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_2: 'Pakai semua laba/keuntungan buat bayar cicilan rumah'
							}
						})
					},
					"Do": "jump question3"
				},
				'Pakai sebagian keuntungan buat bayar utang usaha': {
					'Text': 'Pakai sebagian keuntungan buat bayar utang usaha',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_2: 'Pakai sebagian keuntungan buat bayar utang usaha',
							}
						})
					},
					"Do": "jump question3"
				},
				'Pakai sebagian keuntungan buat mengembangan usaha': {
					'Text': 'Pakai sebagian keuntungan buat mengembangan usaha',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_2: 'Pakai sebagian keuntungan buat mengembangan usaha'
							}
						})
					},
					"Do": "jump question3"
				},
				'Pakai sebagian keuntungan buat dana darurat usaha': {
					'Text': 'Pakai sebagian keuntungan buat dana darurat usaha',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_2: 'Pakai sebagian keuntungan buat dana darurat usaha'
							}
						})
					},
					"Do": "jump question3"
				}
			}
		}
	],

	// *Pre 3
	'question3': [
		{
			'Choice': {
				'Dialog': 'mc Gimana cara jaga keamanan rekening kita dari kejahatan? 🤔',
				'Pakai wifi umum buat transaksi di internet': {
					'Text': 'Pakai wifi umum buat transaksi di internet',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_3: 'Pakai wifi umum buat transaksi di internet'
							}
						})
					},
					"Do": "jump question4"
				},
				'Kasih kode OTP kita ke orang lain': {
					'Text': 'Kasih kode OTP kita ke orang lain',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_3: 'Kasih kode OTP kita ke orang lain',
							}
						})
					},
					"Do": "jump question4"
				},
				'Nggak pernah ganti PIN ATM': {
					'Text': 'Nggak pernah ganti PIN ATM',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_3: 'Nggak pernah ganti PIN ATM'
							}
						})
					},
					"Do": "jump question4"
				},
				'Menutupi tombol ATM pakai tangan waktu masukin PIN di ATM': {
					'Text': 'Menutupi tombol ATM pakai tangan waktu masukin PIN di ATM',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_3: 'Menutupi tombol ATM pakai tangan waktu masukin PIN di ATM'
							}
						})
					},
					"Do": "jump question4"
				}
			}
		}
	],

	// *Pre 4
	'question4': [
		{
			'Choice': {
				'Dialog': 'mc Pentingnya punya izin usaha, kecuali… 🤔',
				'Jadi syarat buat pinjaman modal usaha': {
					'Text': 'Jadi syarat buat pinjaman modal usaha',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_4: 'Jadi syarat buat pinjaman modal usaha'
							}
						})
					},
					"Do": "jump question5"
				},
				'Bikin biaya produksi jadi lebih murah': {
					'Text': 'Bikin biaya produksi jadi lebih murah',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_4: 'Bikin biaya produksi jadi lebih murah',
							}
						})
					},
					"Do": "jump question5"
				},
				'Bisa jualan di supermarket/minimarket modern': {
					'Text': 'Bisa jualan di supermarket/minimarket modern',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_4: 'Bisa jualan di supermarket/minimarket modern'
							}
						})
					},
					"Do": "jump question5"
				},
				'Jadi syarat untuk ikut program pemerintah': {
					'Text': 'Jadi syarat untuk ikut program pemerintah',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_4: 'Jadi syarat untuk ikut program pemerintah'
							}
						})
					},
					"Do": "jump question5"
				}
			}
		}
	],

	// *Pre 5
	'question5': [
		{
			'Choice': {
				'Dialog': 'mc Di bawah ini gambaran tentang pinjaman online ilegal, kecuali... 🤔',
				'Diawasi Otoritas Jasa Keuangan (OJK)': {
					'Text': 'Diawasi Otoritas Jasa Keuangan (OJK)',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_5: 'Diawasi Otoritas Jasa Keuangan (OJK)'
							}
						})
					},
					"Do": "jump recordData"
				},
				'Bisa ngambil data pribadi kita': {
					'Text': 'Bisa ngambil data pribadi kita',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_5: 'Bisa ngambil data pribadi kita',
							}
						})
					},
					"Do": "jump recordData"
				},
				'Cara nagihnya dengan teror orang-orang di sekitar kita': {
					'Text': 'Cara nagihnya dengan teror orang-orang di sekitar kita',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_5: 'Cara nagihnya dengan teror orang-orang di sekitar kita'
							}
						})
					},
					"Do": "jump recordData"
				},
				'Bunganya besar': {
					'Text': 'Bunganya besar',
					'onChosen': function () {
						this.storage({
							player: {
								pre_question_5: 'Bunganya besar'
							}
						})
					},
					"Do": "jump recordData"
				}
			}
		}
	],

	// *RecordData
	'recordData': [
		"hide character mc kuis with slide-out-reverse",
		"wait 2000",
		"show character mc bye at center with slide-up",
		"wait 2000",
		`mc Terima kasih banyak ya sudah mau gabung di pelatihan bersama Ibu Harta. Semoga yang udah diajarkan bisa berguna ya, Sahabat {{player.name}}. Semoga sehat selalu dan sampai ketemu lagi!
		😀🥰😆`,
		// "Nama: {{player.name}}, Jenis Kelamin: {{player.gender}}, Umur: {{player.age}}",
		// "Provinsi: {{player.place}}, Kota / Kabupaten: {{player.kotaOrKabupaten}}, Kecamatan: {{player.kecamatan}}",
		// "Tipe usaha: {{player.tipeUsaha}}, Jenis Usaha: {{player.jenisUsaha}}, Lama Usaha: {{player.lamaUsaha}}",
		// "Pekerja: {{player.pekerja}}, Omset: {{player.omset}}, Nomor Telepon: {{player.phoneNumber}}",
		// "Nasabah: {{player.nasabah}}, Grup: {{player.grup}}",
		// "Question 1: {{player.pre_question_1}}, Question 2: {{player.pre_question_2}}, Question 3: {{player.pre_question_3}}",
		// "question4: {{player.pre_question_4}}, Question 5: {{player.pre_question_5}}",
		function () {

			// Destruct Object and Define Time
			const date = new Date();
			const {
				name,
				gender,
				age,
				place,
				kotaOrKabupaten,
				kecamatan,
				tipeUsaha,
				jenisUsaha,
				lamaUsaha,
				pekerja,
				omset,
				phoneNumber,
				nasabah,
				grup,
				pre_question_1,
				pre_question_2,
				pre_question_3,
				pre_question_4,
				pre_question_5 } = this.storage().player

			// Apend To Form
			const form = new FormData()
			form.append("name", name)
			form.append("gender", gender)
			form.append("age", age)
			form.append("place", place)
			form.append("kotaOrKabupaten", kotaOrKabupaten)
			form.append("kecamatan", kecamatan)
			form.append("tipeUsaha", tipeUsaha)
			form.append("jenisUsaha", jenisUsaha)
			form.append("lamaUsaha", lamaUsaha)
			form.append("pekerja", pekerja)
			form.append("omset", omset)
			form.append("phoneNumber", phoneNumber)
			form.append("nasabah", nasabah)
			form.append("grup", grup)
			form.append("pre_question_1", pre_question_1)
			form.append("pre_question_2", pre_question_2)
			form.append("pre_question_3", pre_question_3)
			form.append("pre_question_4", pre_question_4)
			form.append("pre_question_5", pre_question_5)
			form.append("created_date", date.toLocaleString())

			// Hit Post API PHP for add answer to DB
			fetch("http://localhost:81/Test1/func.php?function=insert_data", {
				method: 'post',
				body: form
			})
				.then(res => {
					console.log(res)
					return res.json()
				})
				.then(data => {
					console.log(data)
					console.log(data)
				})
				.catch(err => {
					console.log(err)
				})
			return true
		},
		"end"
	]
});

