class bankAccount {
  constructor() {
    this.saldo = 0;
  }

  tambahSaldo(value) {
    this.saldo += value;
    alert("Saldo berhasil ditambahkan, Saldo sekarang: " + this.saldo);
  }

  kurangSaldo(value) {
    if (value < 0) {
      alert("Angka harus positif");
      return;
    }
    const newSaldo = this.saldo - value;
    if (newSaldo < 0) {
      alert("Saldo tidak cukup, Saldo sekarang: " + this.saldo);
      return;
    }

    this.saldo = newSaldo;
    alert("Saldo berhasil dikurangi, Saldo sekarang: " + this.saldo);
  }
}

function main() {
  const bank = new bankAccount();
  alert("Selamat datang di aplikasi bank");
  let tryAgain = true;

  while (tryAgain) {
    const choice = prompt("Tambah saldo atau kurangi saldo? (tambah/kurang)");
    let validNumber = false;
    switch (choice) {
      case "tambah":
        const plusValue = parseInt(
          prompt("Masukkan jumlah saldo yang ingin ditambahkan")
        );
        validNumber = isNaN(plusValue);
        if (validNumber) {
          alert("Masukkan angka yang valid");
          break;
        }
        bank.tambahSaldo(plusValue);
        break;
      case "kurang":
        const minusValue = parseInt(
          prompt("Masukkan jumlah saldo yang ingin dikurangi")
        );
        validNumber = isNaN(minusValue);
        if (validNumber) {
          alert("Masukkan angka yang valid");
          break;
        }
        bank.kurangSaldo(minusValue);
        break;
      default:
        alert("Pilihan tidak valid");
    }

    let tryAgainChoice = prompt("Apakah anda ingin melanjutkan? (y/n)");
    switch (tryAgainChoice) {
      case "y":
        tryAgain = true;
        break;
      case "n":
        tryAgain = false;
        break;
      default:
        alert(
          "Pilihan tidak valid, aplikasi akan dihentikan, refresh halaman untuk mencoba kembali"
        );
        tryAgain = false;
    }
  }
}

main();
