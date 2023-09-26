const pythonCodes: string[] = [
  `def add_numbers(a, b):\n    return a + b`,
  `def subtract_numbers(a, b):\n    return a - b`,
  `def multiply_numbers(a, b):\n    return a * b`,
  `def divide_numbers(a, b):\n    if b == 0:\n        return "Error: Division by zero"\n    return a / b`,
  `def calculate_average(numbers):\n    if len(numbers) == 0:\n        return 0\n    return sum(numbers) / len(numbers)`,
  `def is_even(number):\n    return number % 2 == 0`,
  `def is_prime(number):\n    if number <= 1:\n        return False\n    for i in range(2, int(number**0.5) + 1):\n        if number % i == 0:\n            return False\n    return True`,
  `def reverse_string(string):\n    return string[::-1]`,
  `def get_factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * get_factorial(n - 1)`,
  `def count_vowels(string):\n    vowels = "AEIOUaeiou"\n    count = 0\n    for char in string:\n        if char in vowels:\n            count += 1\n    return count`,
  `def capitalize_string(string):\n    return string.capitalize()`,
  `def get_square_root(x):\n    if x < 0:\n        return "Error: Imaginary result"\n    else:\n        return x**0.5`,
  `def check_palindrome(string):\n    return string == string[::-1]`,
  `def find_max(numbers):\n    if len(numbers) == 0:\n        return None\n    else:\n        return max(numbers)`,
  `def get_random_object_of_an_array(arr):\n    if len(arr) == 0:\n        return None\n    element = random.choice(arr)\n    return element`,
];

export default pythonCodes;
