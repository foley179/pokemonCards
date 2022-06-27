using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace pokemonCards.Models
{
    public class Card
    {
        public int Id { get; set; }

        [Required]
        public string? User { get; set; }

        [Required]
        public string? Name { get; set; }

        [Required]
        [Display(Name = "Serial Code")]
        public string? Serial { get; set; }

        [Required]
        public string? Holo { get; set; }

        [Required]
        public string? Set { get; set; }

        [Required]
        public string? Subset { get; set; }

        [Required]
        public string? Rarity { get; set; }

        [Display(Name = "Image Code")]
        public string ImgCode { get; set; }

        public Card()
        {
            ImgCode = "N/A";
            // left empty for other methods
        }
    }
}
