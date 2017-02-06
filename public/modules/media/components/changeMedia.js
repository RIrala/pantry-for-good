import angular from 'angular';

export default angular.module('media')
  .component('changeMedia', {
    bindings: {
      tconfig: '=',
      media: '='
    },
    controller: 'ChangeMediaController',
    template: `
      <!-- Change Media Page -->
      <section class="change-media content">
        <div class="box box-solid box-primary">
          <div class="box-header">
            <h3 class="box-title">CURRENT LOGO</h3>
          </div><!-- /.box-header-->
          <!-- Box body -->
          <div class="box-body">
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-2">
                <foodbank-logo tconfig="$ctrl.tconfig" media="$ctrl.media"></foodbank-logo>
              </div>
            </div>
          </div>
        </div>
        <!-- Box -->
        <div class="box box-solid box-primary">
          <!-- Box header -->
          <div class="box-header">
            <h3 class="box-title">CHANGE LOGO</h3>
          </div><!-- /.box-header-->
          <!-- Box body -->
          <div class="box-body">
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-2">
                <input type="file" nv-file-select uploader="uploader"/>
                <div ng-repeat="item in uploader.queue">
                  <div ng-thumb="{ file:item._file, height:100 }"></div>
                  <button class="btn btn-success btn-block top-buffer" ng-click="upload(item)">Upload Logo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  })
  .name;
