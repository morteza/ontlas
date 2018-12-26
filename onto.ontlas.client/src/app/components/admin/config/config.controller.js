class editController {
  constructor($location, CmsService) {
    "ngInject";
    //TODO set payloadId if :id is passed
    //TODO load data into this.payload
    this.name = 'edit';
    this.CmsService = CmsService;
    this.api = CmsService.api;
    this.$location = $location;
    //TODO load type from server
    this.types = [
      {
        "title":"پُست بلاگ",
        "value":"BLOG"
      },
      {
        "title":"مقالهٔ پشتیبانی",
        "value":"SUPPORT"
      },
      {
        "title":"خبر",
        "value":"NEWS"
      },
      {
        "title":"محتوای تکمیلی دانش",
        "value":"SUPPLEMENTARY"
      },
      {
        "title":"راهنمای داخلی",
        "value":"INLINE_HELP"
      }
    ];
  }

  submit() {
    //TODO validate
    this.api.save(this.payload);
    this.$location.url('/cms');
  }

  cancel() {
    console.log("Canceled!");
  }
}

export default editController;
