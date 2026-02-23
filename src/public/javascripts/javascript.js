document.addEventListener('DOMContentLoaded', () => {
    const dateBuy = document.getElementById("dateBuy")
    dateBuy.value = new Date().toISOString().split('T')[0]
    const quantityInput = document.getElementById('buyQuantity');

    quantityInput.addEventListener('input', function () {
        if (this.value <= 0) {
            this.value = ''; // Xóa trắng nếu nhập số <= 0
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const priceInput = document.getElementById('price-input');
        const realPrice = document.getElementById('real-price');

        priceInput.addEventListener('input', function (e) {
            // 1. Lấy giá trị người dùng nhập, xóa sạch các ký tự không phải số
            let value = e.target.value.replace(/\D/g, "");

            // 2. Lưu giá trị số thuần vào input ẩn (để Backend nhận được số 1000000 chứ không phải 1.000.000)
            realPrice.value = value;

            // 3. Nếu rỗng thì xóa sạch ô input
            if (value === "") {
                e.target.value = "";
                return;
            }

            // 4. Định dạng lại số có dấu chấm phân cách hàng nghìn
            // Ví dụ: 1000000 -> 1.000.000
            e.target.value = new Intl.NumberFormat('de-DE').format(value);
        });
    });
    formatPrice()

    function formatPrice() {
        const priceInput = document.getElementById('buyPrice');
        const realPrice = document.getElementById('real-Price');

        priceInput.addEventListener('input', function (e) {
            // 1. Lấy giá trị người dùng nhập, xóa sạch các ký tự không phải số
            let value = e.target.value.replace(/\D/g, "");

            // 2. Lưu giá trị số thuần vào input ẩn (để Backend nhận được số 1000000 chứ không phải 1.000.000)
            realPrice.value = value;

            // 3. Nếu rỗng thì xóa sạch ô input
            if (value === "") {
                e.target.value = "";
                return;
            }

            // 4. Định dạng lại số có dấu chấm phân cách hàng nghìn
            // Ví dụ: 1000000 -> 1.000.000
            e.target.value = new Intl.NumberFormat('de-DE').format(value);
        });
    }

    console.log("DOM đã sẵn sàng!");
});