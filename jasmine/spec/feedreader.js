/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });

        it('url defined', function() {
          for (const allFeed of allFeeds) {
            expect(allFeed.url).toBeDefined();
            expect(allFeed.url.length).not.toBe(0);
          }
        });

        it('name defined', function() {
          for (const allFeed of allFeeds) {
            expect(allFeed.name).toBeDefined();
            expect(allFeed.name.length).not.toBe(0);
          }
        });
    });

    describe('The menu', function() {
      const clBody = document.body.className;
      it('menu is hidden by default', function() {
        expect(clBody).toEqual('menu-hidden');
      });

      beforeEach(function(done) {
        setTimeout(function() {
          done();
        }, 1);
      });

      it('menu is shown by click', function(done) {
        $('.menu-icon-link').trigger('click');
        setTimeout(function() {
          expect(clBody).toEqual('');
        }, 10);
        done();
      });

      it('menu is hidden by click', function(done) {
        $('.menu-icon-link').trigger('click');
        setTimeout(function() {
          expect(clBody).toEqual('menu-hidden');
        }, 10);
        done();
      });
    });




    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
