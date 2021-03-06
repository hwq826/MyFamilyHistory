cc.Class({
    extends: cc.Component,

    properties: {
        numberNow: {
            default: 80,
        },
        numberMax: {
            default: 100,
        },
    },

    onLoad() {
        this.label = this.node.getChildByName('label').getComponent('cc.Label');

        this.wBar = this.node.width;
        this.hBar = this.node.height;
        this.node.getChildByName('bar').height = this.hBar;
        this.getComponent('cc.ProgressBar').totalLength = this.wBar
        this.label.fontSize = this.hBar;
        this.label.lineHeight = this.hBar;
        
    },

    start() {
        this.refreshNum();
    },

    setNumberNow(_numberNow) {
        this.numberNow = _numberNow;
    },

    refreshNum: function () {
        this.getComponent('cc.ProgressBar').progress = this.numberNow / this.numberMax;
        this.label.string = this.numberNow.toString() + '/' + this.numberMax.toString() + ' ';
    }
});
