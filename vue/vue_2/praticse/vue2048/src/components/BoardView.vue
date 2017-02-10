<template>
    <div class="board"  tabIndex="1">
        <div v-for="r_item in board.cells">
            <cell v-for="c_item in r_item"></cell>
        </div>
        <tile-view v-for="tile in tiles" :tile="tile">
        </tile-view>
        <game-end-overlay :board="board" :onrestart="onRestart"></game-end-overlay>
    </div>
</template>

<script>
    import Cell from './Cell.vue'
    import TileView from './TileView.vue'
    import GameEndOverlay from './GameEndOverlay.vue'
    import RWLock from 'rwlock'

    export default {
        data(){
          return {
            board:new Board(),
            guestureLock:false,
            lock : new RWLock(),
            lastOpTime:new Date(),
            lastDirection:-1,
          }
        },
        mounted(){
          window.addEventListener('keydown', this.handleKeyDown.bind(this));
          var mc = new Hammer(this.$el);
          mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
          var that = this;
          var lock = new RWLock()
          mc.on("panleft panright panup pandown", function(ev) {
            if(!that.checkTimeInLaw()){
              return
            }
            var direction=-1
            switch ( ev.type ){
              case 'panleft': direction=0; break;
              case 'panup': direction=1; break;
              case 'panright': direction=2; break;
              case 'pandown': direction=3; break;
            }
            var weight = 1
            if(direction==that.lastDirection){
              weight = 2
            }
            if(ev.distance<25*weight){
              return
            }
            lock.writeLock('lockname',function (release) {
              if(!that.guestureLock  ){
                that.writeGuestureLock(true);
                that.board.move(direction);
                that.lastOpTime=new Date();
                that.lastDirection=direction;
                that.writeGuestureLock(false)
                release();
              }
            })

          });

        },
        beforeDestroy(){
            window.removeEventListener('keydown', this.handleKeyDown.bind(this));
        },
        computed:{
          tiles(){
              return this.board.tiles
                      .filter(tile => tile.value != 0)
          }
        },
        methods:{
          checkTimeInLaw(){
            var d = new Date()
            if( d.getTime()-this.lastOpTime.getTime()>500 ){
              return true;
            }
            return false;
          },
          writeGuestureLock(flag){
            var that = this
            that.guestureLock = flag
          },
          handleKeyDown(event){
            if (this.board.hasWon()) {
                return;
            }
            if (event.keyCode >= 37 && event.keyCode <= 40) {
                event.preventDefault();
                var direction = event.keyCode - 37;
                this.board.move(direction)
            }
          },
          onRestart(){
            this.board = new Board()
          }
        },
        components: {
            Cell,
            TileView,
            GameEndOverlay,
        }
    }
</script>
