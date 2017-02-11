// Print all numbers from -10 to 19
var problem_1 = -10;

while (problem_1 < 20)
{
	console.log(problem_1);
	problem_1++;
} 

//Print even numbers between 10 to 40.

var problem_2 = 10;

while (problem_2 < 41)
{
	console.log(problem_2);
	problem_2 += 2;
}

//Print odd numbers between 300 & 333

var odd_num = 301;

while (odd_num < 334)
{
	console.log(odd_num)
	odd_num += 2;
}

// Print all numbers divisible by 5 and 3 between 5 and 50

var divisible = 5;

while (divisible < 51)
	if (divisible % 5 === 0 && divisible % 3 === 0)
	{
		console.log(divisible)
		divisible++;
	}
	else
	{
		divisible++;
	}