define([
    "dojo/_base/declare",
    "qasht/_Fake",
    "./Node"
], function (declare, _Fake, Node) {
    /**
     * @class jazzHands.test.fake.rdf.Triple
     * @mixes jazzHands.rdf.Triple
     * @mixes qasht._Fake
     */
    var Triple = declare([_Fake], {
        constructor: function (params) {
            var test = this.test;

            var s, p, o;
            this.subject = new Node(params.subject, test);
            this.predicate = new Node(params.predicate, test);
            this.object = new Node(params.object, test);

            test.assertIsObject(this.subject);
            test.assertIsObject(this.predicate);
            test.assertIsObject(this.object);
        },
        toNT: function () {
            var test = this.test;
            test.assertEqual(0, arguments.length);

            return this.subject.toNT() + " " + this.predicate.toNT() + " " + this.object.toNT();
        },
        toString: function () {
            var test = this.test;
            test.assertEqual(0, arguments.length);

            return this.subject.toNT() + " " + this.predicate.toNT() + " " + this.object.toNT() + " .";
        },
        equals: function (t) {
            var test = this.test;
            var pass = Triple.testApi(t, test);

            return this.subject.equals(t.subject) && this.predicate.equals(t.predicate) && this.object.equals(t.object);
        }
    });

    /**
     * @method jazzHands.test.fake.rdf.Triple#testApi
     * @param {*} object - The object being tested
     * @param {qasht.type._Test} test - The test instance being executed
     */
    Triple.testApi = function (object, test) {
        test.assertIsObject(object);

        test.assertIsObject(object.subject);
        test.assertIsObject(object.predicate);
        test.assertIsObject(object.object);

        test.assertIsFunction(object.toString);
        test.assertIsFunction(object.equals);
    };

    return Triple;
});