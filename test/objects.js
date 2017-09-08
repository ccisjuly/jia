(function() {
  var _ = typeof require == 'function' ? require('../jia') : jia;

  QUnit.module('Objects');
    QUnit.test('version', function(assert) {
      assert.strictEqual(_.VERSION, '1.0.0', 'version is correct!');
    });

}());
