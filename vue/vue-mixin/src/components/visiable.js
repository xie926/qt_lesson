let mixins = {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    close() {
      this.dialogVisible = false;
    },
    open() {
      this.dialogVisible = true;
    }
  }
}
export default mixins;