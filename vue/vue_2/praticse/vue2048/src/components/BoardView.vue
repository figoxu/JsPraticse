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
          }
        },
        mounted(){
          window.addEventListener('keydown', this.handleKeyDown.bind(this));
          var mc = new Hammer(this.$el);
          mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
          var that = this;
          var lock = new RWLock()
          mc.on("panleft panright panup pandown", function(ev) {
            lock.writeLock('lockname',function (release) {
              if( !that.guestureLock ){
                that.writeGuestureLock(true)
                switch ( ev.type ){
                  case 'panleft':
                    that.board.move(0);
                    break;
                  case 'panup':
                    that.board.move(1);
                    break;
                  case 'panright':
                    that.board.move(2);
                    break;
                  case 'pandown':
                    that.board.move(3);
                    break;
                }
              }
              release();
              window.setTimeout(function () {
                that.writeGuestureLock(false)
              },1000);
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
            writeGuestureLock(flag){
              var that = this
              this.lock.writeLock('guesture',function(release){
                that.guestureLock = flag
                release()
              })
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
