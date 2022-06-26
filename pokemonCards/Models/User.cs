using System.ComponentModel.DataAnnotations;

namespace pokemonCards.Models
{
    public class User
    {
        public int ID { get; set; }

        [Required]
        [Display(Name = "Username")]
        public string Name { get; set; }

        public User()
        {
            // left empty for other methods
        }
    }
}
