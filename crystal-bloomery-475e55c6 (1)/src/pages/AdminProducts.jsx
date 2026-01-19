import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Trash2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminProducts() {
  const queryClient = useQueryClient();
  const [deleting, setDeleting] = React.useState(null);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => base44.entities.Product.list(),
    initialData: [],
  });

  const handleDelete = async (product) => {
    setDeleting(product.id);
    try {
      await base44.entities.Product.delete(product.id);
      queryClient.invalidateQueries(['products']);
      toast.success(`${product.name} deleted`);
    } catch (error) {
      toast.error('Failed to delete product');
    }
    setDeleting(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 pt-32 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#10665c] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-4xl text-stone-800 mb-8">Manage Products</h1>
        
        <div className="bg-white border border-stone-200 divide-y divide-stone-200">
          {products.map((product) => (
            <div key={product.id} className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg text-stone-800">{product.name}</h3>
                <p className="text-sm text-stone-500">${product.price}</p>
              </div>
              <Button
                onClick={() => handleDelete(product)}
                disabled={deleting === product.id}
                variant="destructive"
                size="sm"
              >
                {deleting === product.id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}