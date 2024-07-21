namespace JustLoginTest
{
    public class Program
    {
        static void Main(string[] args)
        {
            var calc = new FizzBuzzCalculator();

            for (int i = 0; i <= 100; i++)
            {
                Console.WriteLine($"{i}\t{calc.Calculate(i)}");
            }

        }
    }
}
