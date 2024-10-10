let firstOperand = null;
let operator = "";
let currentInput = "";

// Menampilkan angka ke display
function appendToDisplay(value) {
  currentInput += value; // Mengupdate input saat ini
  document.getElementById("result").value = currentInput; // Menampilkan input saat ini
}

// Menghapus display
function clearDisplay() {
  currentInput = ""; // Menghapus input saat ini
  document.getElementById("result").value = ""; // Menghapus tampilan
}

// Menghapus karakter terakhir
function deleteLast() {
  currentInput = currentInput.slice(0, -1); // Menghapus karakter terakhir dari input
  document.getElementById("result").value = currentInput; // Mengupdate tampilan
}

// Menghitung hasil
function calculateResult() {
  try {
    // Eksekusi evaluasi dan simpan hasil
    const result = eval(currentInput);
    const parts = currentInput.match(/(\d+)([\+\-\*\/])(\d+)/); // Memisahkan operand dan operator

    if (parts) {
      firstOperand = parts[1]; // Operand pertama
      operator = parts[2]; // Operator
      const secondOperand = parts[3]; // Operand kedua

      // Tambahkan riwayat ke tabel
      updateHistory(firstOperand, operator, secondOperand, result);
    }

    currentInput = result.toString(); // Mengupdate input saat ini dengan hasil
    document.getElementById("result").value = currentInput; // Menampilkan hasil
  } catch {
    document.getElementById("result").value = "Error"; // Menampilkan error jika terjadi kesalahan
  }
}

// Fungsi untuk menyimpan riwayat perhitungan
function updateHistory(first, op, second, result) {
  const historyBody = document.getElementById("history-body");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${first}</td><td>${op}</td><td>${second}</td><td>${result}</td><td><button onclick="deleteHistory(this)">Hapus</button></td>`;
  historyBody.appendChild(newRow);
}

// Fungsi untuk menghapus entri riwayat
function deleteHistory(button) {
  const row = button.parentElement.parentElement; // Mendapatkan baris yang berisi tombol
  row.remove(); // Menghapus baris dari tabel
}

// Fungsi untuk negasi
function toggleSign() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) * -1).toString(); // Negasi dari input saat ini
    document.getElementById("result").value = currentInput; // Menampilkan negasi
  }
}
