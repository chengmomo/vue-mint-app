<template>
  <div>
    <common-cell title="索引列表Index List" @click-cell="clickCell('IndexList')"></common-cell>
    <common-cell title="picker" @click-cell="openPicker"></common-cell>
    <!--<div class="nav">-->
      <!--<router-link to="/category" class="nav-item">推荐</router-link>-->
      <!--<router-link to="/singerlist" class="nav-item">歌手</router-link>-->
      <!--<router-link to="/toplists" class="nav-item">排行榜</router-link>-->
      <!--<router-link to="/search" class="nav-item">搜索</router-link>-->
    <!--</div>-->
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
      <mt-picker ref="pickers" :show-toolbar="showToolbar" :visibleItemCount="3"
                 valueKey="name"
                 :slots="slots" @change="onValuesChange">
        <!--<mt-button @click="handleConfirm" class="sure">确认</mt-button>-->
      </mt-picker>
    </mt-popup>
  </div>
</template>

<script>
  import CommonCell from '../../components/CommonCell';

  export default {
    name: 'MintDemo',
    components: { CommonCell },
    data() {
      return {
        // pickerVisible: false,
        showToolbar: true,
        popupVisible: false,
        slots1: [
          {
            flex: 1,
            values: ['2015 lux', '2016 lux', '2017 lux', '2018 lux', '2019 lux', '2020 lux'],
            className: 'slot1',
            textAlign: 'center',
            defaultIndex: 3
          }
        ],
        slots: [
          {
            flex: 1,
            values: [{ name: '201分', value: 201 }, { name: '2010分', value: 2010 }, { name: '2011分', value: 2011 }],
            className: 'slot1',
            textAlign: 'center',
            defaultIndex: 1
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: [{ name: '1秒', value: 1 }, { name: '2秒', value: 2 }, { name: '3秒', value: 3 }, {
              name: '4秒',
              value: 4
            }],
            className: 'slot3',
            textAlign: 'center',
            defaultIndex: 2
          }
        ]
      };
    },
    methods: {
      clickCell(name) {
        this.$router.push({
          name
        });
      },
      openPicker() {
        // this.$refs.picker.open();
        this.popupVisible = true;
      },
      handleConfirm() {

      },
      onValuesChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
      }
    }
  };
</script>

<style scoped>
  .mint-popup {
    width: 100%;
  }

  .slot3 > > > .picker-item.picker-selected {
    color: #4caf50;
    font-size: 12px;
  }
</style>
