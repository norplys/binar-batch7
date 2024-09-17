let saldo = 0

function tambahSaldo(value) {
    saldo += value
    alert('Saldo berhasil ditambahkan, Saldo sekarang: ' + saldo)
}

function kurangSaldo(value) {
    if (value < 0) {
        alert('Angka harus positif')
        return
    }
    const newSaldo = saldo - value
    if (newSaldo < 0) {
        alert('Saldo tidak cukup, Saldo sekarang: ' + saldo)
        return
    }

    saldo = newSaldo
    alert('Saldo berhasil dikurangi, Saldo sekarang: ' + saldo)
}



function main() {
    alert('Selamat datang di aplikasi bank')
    let tryAgain = true

    while (tryAgain) {
        const choice = prompt('Tambah saldo atau kurangi saldo? (tambah/kurang)')
        let validNumber = false
        switch (choice) {
            case 'tambah':
                const plusValue = parseInt(prompt('Masukkan jumlah saldo yang ingin ditambahkan'))
                validNumber = isNaN(plusValue)
                if (validNumber) {
                    alert('Masukkan angka yang valid')
                    break
                }
                tambahSaldo(plusValue)
                break
            case 'kurang':
                const minusValue = parseInt(prompt('Masukkan jumlah saldo yang ingin dikurangi'))
                validNumber = isNaN(minusValue)
                if (validNumber) {
                    alert('Masukkan angka yang valid')
                    break
                }
                kurangSaldo(minusValue)
                break
            default:
                alert('Pilihan tidak valid')
        }
        
        let tryAgainChoice = prompt('Apakah anda ingin melanjutkan? (y/n)')
        switch (tryAgainChoice) {
            case 'y':
                tryAgain = true
                break
            case 'n':
                tryAgain = false
                break
            default:
                alert('Pilihan tidak valid, aplikasi akan dihentikan')
                tryAgain = false
        }
    }

}

main()
