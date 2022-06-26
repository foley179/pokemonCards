using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace pokemonCards.Models
{
    public class Card
    {
        public int Id { get; set; }

        [Required]
        [Display(Name = "User")]
        public string User { get; set; }
        //public IEnumerable<SelectListItem> UserList { get; set; }
        // currently causing error

        [Required]
        [Display(Name = "Name")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Serial Code")]
        public string Serial { get; set; }

        public Card()
        {
            // left empty for other methods
        }
    }
}
