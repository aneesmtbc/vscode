/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as assert from 'assert';
import { Iterable } from 'vs/base/common/iterator';

suite('Iterable', function () {

	const customIterable = new class {

		*[Symbol.iterator]() {
			yield 'one';
			yield 'two';
			yield 'three';
		}
	};

	test('first', function () {

		assert.equal(Iterable.first([]), undefined);
		assert.equal(Iterable.first([1]), 1);
		assert.equal(Iterable.first(customIterable), 'one');
		assert.equal(Iterable.first(customIterable), 'one'); // fresh
	});

	test('equals', () => {
		assert.strictEqual(Iterable.equals([1, 2], [1, 2]), true);
		assert.strictEqual(Iterable.equals([1, 2], [1]), false);
		assert.strictEqual(Iterable.equals([1], [1, 2]), false);
		assert.strictEqual(Iterable.equals([2, 1], [1, 2]), false);
	});

});
