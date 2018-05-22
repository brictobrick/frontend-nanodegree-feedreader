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
      it('menu is hidden by default', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

      it('menu is toggled by click', function() {
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(false);

        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });
    });

    describe('Initial Entries', function() {
      let elemEntry;
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      it('loadFeed function works', function(done) {
        elemEntry = $('.entry');
        expect(elemEntry).not.toBeNull();
        done();
      });
    });

    describe('New Feed Selection', function() {
      let content1;
      let content2;
      beforeEach(function(done) {
        loadFeed(0, function() {
          content1 = $('.feed').html();
        });
        loadFeed(1, function() {
          content2 = $('.feed').html();
          done();
        });
      });

      it('loadFeed function changes content', function(done) {
        expect(content1).not.toBe(content2);
        done();
      });
    });
}());
