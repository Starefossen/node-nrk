'use strict';

const assert = require('assert');
const Joi = require('joi');
const nrk = require('../');

describe('autocomplete()', function describe() {
  it('returns autocomplete results', function it(done) {
    this.timeout(10000);

    nrk.tv.autocomplete('Side', function autocompleteCb(err, data, resp) {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        searchTerm: Joi.string(),
        success: Joi.boolean(),
        errorMessage: Joi.string().allow(null),
        exception: Joi.string().allow(null),
        result: Joi.array().items(Joi.object().keys({
          fields: Joi.string().allow(null),
          _source: Joi.object().keys({
            seriesId: Joi.string().allow(null),
            seasonId: Joi.string().allow(null),
            seasonNumber: Joi.number().integer().allow(null),
            episodeNumber: Joi.number().integer().allow(null),
            seriesTitle: Joi.string(),
            seasonDisplayType: Joi.number().integer(),
            episodeNumberOrDate: Joi.string().allow(null),
            episodeNumberWithTotal: Joi.string().allow(null),
            searchHitDisplayTitle: Joi.string(),
            episodeTitle: Joi.string(),
            hideInSearchResults: Joi.boolean(),
            aldersgrense: Joi.number().integer(),
            hosts: Joi.array().allow(null),
            seasons: Joi.array().allow(null),
            duration: Joi.number().integer(),
            mentionedList: Joi.array().allow(null),
            originalTitle: Joi.string().allow(null),
            otherTitles: Joi.array().allow(null),
            indexPoints: Joi.array().allow(null),
            programUrlMetadata: Joi.string().allow(null),
            usageRights: Joi.string().allow(null),
            airDate: Joi.string().allow(null),
            id: Joi.string(),
            title: Joi.string(),
            description: Joi.string(),
            url: Joi.string(),
            category: Joi.string().allow(null),
            hasRights: Joi.boolean(),
            sourceMedium: Joi.string().allow(null),
            subjects: Joi.array().allow(null),
            image: Joi.object(),
            contributors: Joi.array().allow(null),
            availableInSuper: Joi.boolean(),
          }),
          _index: Joi.string(),
          _score: Joi.number(),
          score: Joi.number(),
          _type: Joi.string(),
          _version: Joi.string().allow(null),
          _id: Joi.string(),
          sort: Joi.string().allow(null),
          highlight: Joi.string().allow(null),
          highlights: Joi.object(),
          _explanation: Joi.string().allow(null),
        })),
      });

      Joi.validate(data, schema, done);
    });
  });
});

describe('program()', function describe() {
  it('returns data for program', function it(done) {
    this.timeout(10000);

    nrk.tv.program('NNFA41014515', function programCb(err, data, resp) {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      const schema = Joi.object().keys({
        _links: Joi.object(),
        id: Joi.string(),
        title: Joi.string(),
        description: Joi.string(),
        mediaElementType: Joi.string(),
        mediaType: Joi.string(),
        image: Joi.object(),
        images: Joi.object(),
        mediaUrl: Joi.string(),
        mediaAssets: Joi.array().items(Joi.object().keys({
          url: Joi.string(),
          duration: Joi.string(),
          carrierId: Joi.string(),
          webVttSubtitlesUrl: Joi.string().allow(null),
          timedTextSubtitlesUrl: Joi.string().allow(null),
        })),
        bitrateInfo: Joi.object().keys({
          startIndex: Joi.number().integer(),
          maxIndex: Joi.number().integer(),
        }),
        playerType: Joi.string(),
        flashPlayerVersion: Joi.string(),
        flashPluginVersion: Joi.string(),
        isAvailable: Joi.boolean(),
        messageType: Joi.string(),
        mediaAnalytics: Joi.object(),
        scoresStatistics: Joi.object(),
        convivaStatistics: Joi.object(),
        messageId: Joi.string().allow(null),
        isLive: Joi.boolean(),
        usageRights: Joi.object().keys({
          isGeoBlocked: Joi.boolean(),
          availableFrom: Joi.string(),
          availableTo: Joi.string(),
          hasRightsNow: Joi.boolean(),
        }),
        akamaiBeacon: Joi.string(),
        liveBufferStartTime: Joi.string().allow(null),
        fullTitle: Joi.string(),
        mainTitle: Joi.string(),
        legalAge: Joi.string(),
        relativeOriginUrl: Joi.string(),
        duration: Joi.string(),
        shortIndexPoints: Joi.array(),
        hasSubtitles: Joi.boolean(),
        subtitlesDefaultOn: Joi.boolean(),
        subtitlesUrlPath: Joi.string().allow(null),
        seriesId: Joi.string(),
        seriesTitle: Joi.string(),
        episodeNumberOrDate: Joi.string(),
        externalEmbeddingAllowed: Joi.boolean(),
        startNextEpisode: Joi.number().integer(),
      });

      Joi.validate(data, schema, done);
    });
  });
});

describe('series()', function describe() {
  it('returns data for series', function it(done) {
    this.timeout(10000);

    nrk.tv.series('side-om-side', function seriesCb(err, data, resp) {
      assert.ifError(err);
      assert.equal(resp.statusCode, 200);

      done();
    });
  });
});
