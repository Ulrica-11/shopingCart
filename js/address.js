var address = new Vue({
    el: '#address',
    data: {
        limitNum: 3,
        addressList: [],
        currentIndex: 0
    },
    mounted: function () {
        this.$nextTick(function () {
            address.gitAddressList();
        });
    },
    computed: { //计算
        filterAddress: function () {
            return this.addressList.slice(0,this.limitNum);
        }
    },
    methods: {
        gitAddressList: function () {
            var _this = this;
            this.$http.get('data/address.json').then(response=>{
                var res = response.data;
                if(res.status == "0"){
                    this.addressList = res.result;
                }
            })
        },
        loadMore: function () {
            this.limitNum = this.addressList.lenght;
        },
        setDefault: function (addressId) {
            this.addressList.forEach(function (item, index) {
                if(addressId == item.addressId){
                    item.isDefault = true;
                }else{
                    item.isDefault = false;
                }
            });
        }
    }
});