'use strict';

const assert = require('assert');
const Joi = require('joi');
const nrk = require('../');

describe('categories()', function describe() {
  it('returns list of categories', function it(done) {
    nrk.tv.mobil.categories(function categoriesCb(err, data, resp) {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.array().items(Joi.object().keys({
        categoryId: Joi.string().example('dokumentar'),
        displayValue: Joi.string().example('Dokumentar'),
        availableFilters: Joi.array().items(Joi.string().valid(
          [ 'POPULAR', 'RECOMMENDED', 'RECENT' ]
        )),
      }));

      Joi.validate(data, schema, done);
    });
  });
});

describe('programs()', function describe() {
  it('returns list of programs', function it(done) {
    this.timeout(10000);

    nrk.tv.mobil.programs(null, function programsCb(err, data, resp) {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.array().items(Joi.object().keys({
        title: Joi.string().example('Diktaturet'),
        description: Joi.string().allow(''),
        episodeNumberOrDate: Joi.string().example('7:8'),
        mediaUrl: Joi.string(),
        programId: Joi.string().example('mynt14000715'),
        seriesId: Joi.string().example('diktaturet'),
        seriesImageId: Joi.string().regex(/^[a-zA-Z0-9_-]+$/),
        imageId: Joi.string().regex(/^[a-zA-Z0-9_-]+$/),
        plugImageId: Joi.string().regex(/^[a-zA-Z0-9_-]+$/),
        source: Joi.string().example('plugs'),
        category: Joi.object().keys({
          categoryId: Joi.string().example('underholdning'),
          displayValue: Joi.string().example('Underholdning'),
          priority: Joi.number().integer(),
        }),
        seasonId: Joi.number().integer(),
        promoText: Joi.string(),
        usageRights: Joi.object().keys({
          availableFrom: Joi.number().integer(),
          availableTo: Joi.number().integer(),
          hasNoRights: Joi.boolean(),
          geoblocked: Joi.boolean(),
        }),
        liveProgramMetadata: Joi.object().keys({
          startTime: Joi.number().integer(),
          endTime: Joi.number().integer(),
          nextProgram: Joi.string(),
        }),
        plugTitle: Joi.string(),
        legalAge: Joi.string().valid(['A', '6', '9', '12', '15', '18']),
        labelText: Joi.string(),
        channelId: Joi.string(),
        epgEntries: Joi.array().items(Joi.object()),
        size: Joi.string().valid('small', 'medium', 'large', 'random'),
        applicationType: Joi.string().example('bigscreen'),
        duration: Joi.number().integer(),
        isAvailable: Joi.boolean(),
      }));

      Joi.validate(data, schema, done);
    });
  });

  it('returns list of programs', function it(done) {
    this.timeout(10000);

    nrk.tv.mobil.programs('mynt14000715', function programsCb(err, data, resp) {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        title: Joi.string().example('Diktaturet'),
        description: Joi.string().allow(''),
        episodeNumberOrDate: Joi.string().example('7:8'),
        mediaUrl: Joi.string(),
        programId: Joi.string().example('mynt14000715'),
        seriesId: Joi.string().example('diktaturet'),
        seriesImageId: Joi.string().regex(/^[a-zA-Z0-9_-]+$/),
        imageId: Joi.string().regex(/^[a-zA-Z0-9_-]+$/),
        category: Joi.object().keys({
          categoryId: Joi.string().example('underholdning'),
          displayValue: Joi.string().example('Underholdning'),
          priority: Joi.number().integer(),
        }),
        seasonId: Joi.number().integer(),
        usageRights: Joi.object().keys({
          availableFrom: Joi.number().integer(),
          availableTo: Joi.number().integer(),
          hasNoRights: Joi.boolean(),
          geoblocked: Joi.boolean(),
        }),
        legalAge: Joi.string().valid(['A', '6', '9', '12', '15', '18']),
        numberOfAvailableEpisodes: Joi.number().integer(),
        epgEntries: Joi.array(),
        duration: Joi.number().integer(),
        isAvailable: Joi.boolean(),
        fullTitle: Joi.string().example('Diktaturet 7:8'),
        shortIndexPoints: Joi.array().items(Joi.object().keys({
          title: Joi.string().example('Velkommen til Diktaturet'),
          startPoint: Joi.number().integer(),
          partId: Joi.number().integer(),
          part: Joi.number().integer(),
        })),
        hasSubtitles: Joi.boolean(),
        hasReview: Joi.boolean(),
        series: Joi.object().keys({
          seriesId: Joi.string().example('diktaturet'),
          title: Joi.string().example('Diktaturet'),
          description: Joi.string(),
          seasonIds: Joi.array().items(Joi.object().keys({
            id: Joi.number().integer(),
            name: Joi.string().example('Sesong 1'),
          })),
          imageId: Joi.string().regex(/^[a-zA-Z0-9_-]+$/),
          category: Joi.object().keys({
            categoryId: Joi.string().example('underholdning'),
            displayValue: Joi.string().example('Underholdning'),
            priority: Joi.number().integer(),
          }),
          programs: Joi.array().items(Joi.object().keys({
            title: Joi.string().example('Diktaturet'),
            description: Joi.string(),
            episodeNumberOrDate: Joi.string().example('7:8'),
            programId: Joi.string().example('mynt14000715'),
            seriesId: Joi.string().example('diktaturet'),
            imageId: Joi.string().regex(/^[a-zA-Z0-9_-]+$/),
            category: Joi.object().keys({
              categoryId: Joi.string().example('underholdning'),
              displayValue: Joi.string().example('Underholdning'),
              priority: Joi.number().integer(),
            }),
            seasonId: Joi.number().integer(),
            usageRights: Joi.object().keys({
              availableFrom: Joi.number().integer(),
              availableTo: Joi.number().integer(),
              hasNoRights: Joi.boolean(),
              geoblocked: Joi.boolean(),
            }),
            legalAge: Joi.string().valid(['A', '6', '9', '12', '15', '18']),
            duration: Joi.number().integer(),
            isAvailable: Joi.boolean(),
          })),
        }),
        contributors: Joi.array(),
        relativeOriginUrl: Joi.string(),
        more: Joi.array().label('Related Shows'),
        statistics: Joi.object(),
      });

      Joi.validate(data, schema, done);
    });
  });
});

describe('series()', function describe() {
  it('returns single series', function it(done) {
    this.timeout(10000);

    nrk.tv.mobil.series('solsikkesmuget-19', function seriesCb(err, data, resp) {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        seriesId: Joi.string().example('solsikkesmuget-19'),
        title: Joi.string().example('Solsikkesmuget 19'),
        description: Joi.string(),
        seasonIds: Joi.array().items(Joi.object().keys({
          id: Joi.number().integer().example(35359),
          name: Joi.string().example('Sesong 1'),
        })),
        imageId: Joi.string().regex(/^[a-zA-Z0-9_-]+$/),
        category: Joi.object().keys({
          categoryId: Joi.string().example('barn'),
          displayValue: Joi.string().example('Barn'),
        }),
        programs: Joi.array().items(Joi.object().keys({
          title: Joi.string().example('Solsikkesmuget 19'),
          description: Joi.string(),
          episodeNumberOrDate: Joi.string().example('24:24'),
          programId: Joi.string().example('msui12008313'),
          seriesId: Joi.string().example('solsikkesmuget-19'),
          imageId: Joi.string().regex(/^[a-zA-Z0-9_-]+$/),
          category: Joi.object().keys({
            categoryId: Joi.string().example('barn'),
            displayValue: Joi.string().example('Barn'),
          }),
          seasonId: Joi.number().integer().example(35359),
          usageRights: Joi.object().keys({
            availableFrom: Joi.number().integer(),
            availableTo: Joi.number().integer(),
            hasNoRights: Joi.boolean(),
            geoblocked: Joi.boolean(),
          }).allow(null),
          legalAge: Joi.string().valid(['A', '6', '9', '12', '15', '18']),
          duration: Joi.number().allow(null),
          isAvailable: Joi.boolean(),
        })),
      });

      Joi.validate(data, schema, done);
    });
  });
});

describe('search()', function describe() {
  it('returns matching list of programs', function it(done) {
    this.timeout(10000);

    nrk.tv.mobil.search('Side om side', function searchCb(err, data, resp) {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        metaData: Joi.object(),
        hits: Joi.array().items(Joi.object().keys({
          type: Joi.string().valid('serie', 'episode', 'program'),
          hit: Joi.object().keys({
            objectId: Joi.string().example('side-om-side'),
            title: Joi.string().example('Side om side'),
            description: Joi.string(),
            imageId: Joi.string().regex(/^[a-zA-Z0-9_-]+$/),
            seasons: Joi.any().allow(null),
            category: Joi.object(),
            duration: Joi.number().allow(null),
            expires: Joi.any().allow(null),
            seriesId: Joi.string().allow(null).example('side-om-side'),
            seasonNumber: Joi.string().allow(null),
            seriesTitle: Joi.string().allow(null),
            episodeNumberOrDate: Joi.string().allow(null).example('7:8'),
            episodeTitle: Joi.string().allow(null),
            aldersgrense: Joi.number().integer().allow(null),
            usageRights: Joi.object().keys({
              availableFrom: Joi.number().integer(),
              availableTo: Joi.number().integer(),
              hasNoRights: Joi.boolean(),
              geoblocked: Joi.boolean(),
            }).allow(null),
            programId: Joi.string().allow(null).example('mynt14000715'),
          }),
          highlights: Joi.array().allow(null),
        })),
      });

      Joi.validate(data, schema, done);
    });
  });
});
